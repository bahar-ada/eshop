import React from 'react'
import styles from './ShoppingCartItems.module.css'
import { useSelector } from 'react-redux'
import ShoppingCartSingleItem from './ShoppingCartSingleItem'

const ShoppingCartItems = () => {
  const shoppingCart =  useSelector(state=>state.shoppingCart)
  
  if(shoppingCart.totalCount===0)
  {
    return (
        <h1>سبد خرید شما خالی است</h1>
    )
  }
  
  return (
    <div>
{shoppingCart.items.map(item=>{
  return <ShoppingCartSingleItem product={item} />
})}
    </div>
  )
}

export default ShoppingCartItems