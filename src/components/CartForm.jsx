import { useState } from "react"

// eslint-disable-next-line react/prop-types
const CartForm = ({ onAddCart }) => {
  const [itens, setItens] = useState("")
  const [total, setTotal] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddCart({ id: Date.now(), itens: itens.split(","), total })
    setItens("")
    setTotal("")
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Cadastrar Carrinho</h1>
      <input
        type="text"
        placeholder="Itens (separados por vírgula)"
        value={itens}
        onChange={(e) => setItens(e.target.value)}
        className="search-input"
      />
      <input
        type="number"
        placeholder="Total"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        className="search-input"
      />
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default CartForm
