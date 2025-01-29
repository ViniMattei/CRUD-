// src/App.jsx
import { useState } from "react"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"
import ItemList from "./components/ItemList"
import ItemForm from "./components/ItemForm"
import CartList from "./components/CartList"
import CartForm from "./components/CartForm"
import Dashboard from "./components/Dashboard"

const App = () => {
  const [products, setProducts] = useState([])
  const [items, setItems] = useState([])
  const [carts, setCarts] = useState([])

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  const addItem = (item) => {
    setItems([...items, item])
  }

  const addCart = (cart) => {
    setCarts([...carts, cart])
  }

  return (
    <div>
      <Dashboard
        totalProdutos={products.length}
        totalItens={items.length}
        totalCarrinhos={carts.length}
      />
      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} />
      <ItemForm onAddItem={addItem} />
      <ItemList items={items} />
      <CartForm onAddCart={addCart} />
      <CartList carts={carts} />
    </div>
  )
}

export default App
