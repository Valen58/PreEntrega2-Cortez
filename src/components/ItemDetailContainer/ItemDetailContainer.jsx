import { useEffect, useState } from "react"
import { getProductById } from "../promises/productos"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    getProductById(id)
      .then(res => setItem(res))
      .catch(error => console.log(error))
  }, [id])

  if (!item) {
    return <div>Loading...</div>
  }

  const addToCart = () => {
    alert(`Producto ${item.id} agregado al carrito`);
  }

  return (
    <div className="item-detail-container">
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>Stock: {item.stock}</p>
      <button onClick={addToCart} className="add-to-cart-btn">Agregar al carrito</button>
    </div>
  )
}