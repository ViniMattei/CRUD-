import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ItemForm = ({ onAddItem }) => {
  const [nome, setNome] = useState("")
  const [quantidade, setQuantidade] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddItem({ id: Date.now(), nome, quantidade })
    setNome("")
    setQuantidade("")
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Cadastrar Item</h1>
      <input
        type="text"
        placeholder="Nome do Item"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="search-input"
      />
      <input
        type="number"
        placeholder="Quantidade"
        value={quantidade}
        onChange={(e) => setQuantidade(e.target.value)}
        className="search-input"
      />
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default ItemForm
