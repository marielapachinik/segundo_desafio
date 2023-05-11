import React from 'react'
import "boxicons";

const CartWidget = () => {
  return (
    <div className="cart">
        <box-icon name="cart" color="white" width="100"></box-icon>
        <span className="item__total">0</span>
    </div>
  )
}

export default CartWidget
