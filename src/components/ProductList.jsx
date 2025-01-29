// src/components/ProductList.jsx
import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ProductList = ({ products }) => {
  const [search, setSearch] = useState("")

  // eslint-disable-next-line react/prop-types
  const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <h1>Lista de Produtos</h1>
      <input
        type="text"
        placeholder="Buscar Produto"
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nome}</td>
              <td>{product.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList
