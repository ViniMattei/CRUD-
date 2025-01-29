import { useState } from "react"

// eslint-disable-next-line react/prop-types
const ItemList = ({ items }) => {
  const [search, setSearch] = useState("")

  // eslint-disable-next-line react/prop-types
  const filteredItems = items.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <h1>Lista de Itens</h1>
      <input
        type="text"
        placeholder="Buscar Item"
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ItemList
