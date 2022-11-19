import React from 'react'
import { FaMinus, FaMinusSquare, FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({amount, setIncrement , setDecrement}) => {
    
  return (
    <div className="cart-button">
        <div className="amount-toggle">
        <button onClick={() => setDecrement()}>
            <FaMinus/>
        </button>
        {amount}
        <button onClick={setIncrement}>
            <FaPlus/>
        </button>
    </div>
    </div>
  )
}

export default CartAmountToggle