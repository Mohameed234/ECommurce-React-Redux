import React from 'react'
import style from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { clear, deleteFromCart } from '../../rtk/slices/cart-slice'


const Cart = () => {

  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce((acc, product) => {
      acc += product.price * product.quantity
      return acc
  }, 0)
  return (
    <div className={style.cart}>
      <h1>Welcome To Cart</h1>
      <button className={style.btnCart} onClick={() => dispatch(clear())}> Clear Cart </button>
      <h5>Total Price : {totalPrice.toFixed(2)} $</h5>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
             <tr key={product.id}>
             <td>{product.id}</td>
             <td>{product.title}</td>
             <td>
               <img src={product.image} alt=''/>
             </td>
             <td>{product.price} $</td>
             <td> {product.quantity}</td>
             <td>
               <button onClick={() => dispatch(deleteFromCart(product)) }>Delete</button>
             </td>
           </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default Cart