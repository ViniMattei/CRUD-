using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Produto
    {
        [Key]
        public int Id { get; set; }
        public required string Nome { get; set; }

        public ICollection<Item> Itens { get; set; }

    }
}
