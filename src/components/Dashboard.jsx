import "react"

// eslint-disable-next-line react/prop-types
const Dashboard = ({ totalProdutos, totalItens, totalCarrinhos }) => {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <p>Total de Produtos: {totalProdutos}</p>
      <p>Total de Itens: {totalItens}</p>
      <p>Total de Carrinhos: {totalCarrinhos}</p>
    </div>
  )
}

export default Dashboard
