using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Data;
using Backend.Models;
using System.Collections.Generic; // Certifique-se de que esta diretiva está presente
using System.Threading.Tasks; // Certifique-se de que esta diretiva está presente

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ItemController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/item
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            return await _context.Itens.Include(i => i.Produto).ToListAsync();
        }

        // GET: api/item/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<Item>> GetItem(int id)
        {
            var item = await _context.Itens.Include(i => i.Produto).FirstOrDefaultAsync(i => i.Id == id);

            if (item == null)
            {
                return NotFound();
            }

            return item;
        }

        // POST: api/item
        [HttpPost]
        public async Task<ActionResult<Item>> PostItem(Item item)
        {
            // Verifique se o Produto existe antes de adicionar o Item
            var produto = await _context.Produtos.FindAsync(item.ProdutoId);
            if (produto == null)
            {
                return BadRequest("Produto não encontrado.");
            }

            _context.Itens.Add(item); // Corrigido para adicionar o Item, não o Produto
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item);
        }

        // PUT: api/item/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> PutItem(int id, Item item)
        {
            if (id != item.Id)
            {
                return BadRequest();
            }

            _context.Entry(item).State = EntityState.Modified; // Corrigido para usar 'item' em vez de 'Item'

            try
            {
                await _context.SaveChangesAsync();
                return NoContent();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
        }

        // DELETE: api/item/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = await _context.Itens.FindAsync(id);
            if (item == null)
            {
                return NotFound();
            }

            _context.Itens.Remove(item);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ItemExists(int id)
        {
            return _context.Itens.Any(e => e.Id == id);
        }
    }
}