import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ProductForm = ({ onAddProduct }) => {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddProduct({ id: Date.now(), nome, preco })
    setNome("")
    setPreco("")
  }

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>Cadastrar Produto</h1>
      <input
        type="text"
        placeholder="Nome do Produto"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="search-input"
      />
      <input
        type="number"
        placeholder="Preço"
        value={preco}
        onChange={(e) => setPreco(e.target.value)}
        className="search-input"
      />
      <button type="submit">Cadastrar</button>
    </form>
  )
}

export default ProductForm
