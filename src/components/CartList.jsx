/* eslint-disable react/prop-types */
import "react"

const CartList = ({ carts }) => {
  return (
    <div className="container">
      <h1>Lista de Carrinhos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Itens</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart) => (
            <tr key={cart.id}>
              <td>{cart.id}</td>
              <td>{cart.itens.join(", ")}</td>
              <td>{cart.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CartList
