using System.Collections.Generic; // Adicione esta linha
using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Carrinho
    {
        [Key]
        public int Id { get; set; }
        public List<Item> Itens { get; set; } = new List<Item>();

         public ICollection<Item> Itens { get; set; }
    }
}