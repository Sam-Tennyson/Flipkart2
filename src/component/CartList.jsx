import React, { useState } from 'react'
import "./CartList.css"
import { useSelector } from "react-redux"

function CartList() {
  const [checkItem, setCheckItem] = useState("")
  const CartItem = useSelector((state)=> state.addedItem)
  console.log("CartItem",CartItem)
  return (
    <>
      <div className="makeWhite">
          Please Login ... 
      </div>
    </>
  )
}

export default CartList
