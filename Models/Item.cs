using System.ComponentModel.DataAnnotations;

namespace Backend.Models
{
    public class Item
    {
        [Key]
        public int Id { get; set; }
        public int Quantidade { get; set; }
        public required string UnidadeDeMedida { get; set; }

        public int ProdutoId { get; set; }
        public required Produto Produto { get; set; }

        public int CarrinhoId { get; set; } 
        public Carrinho Carrinho { get; set; }
    }
}