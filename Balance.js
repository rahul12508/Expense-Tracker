import React from 'react'
import './Balance.css';

const Balance = ({historys}) => {

   const amount = historys.map((history) => history.amount);
    
     const subTotal = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);

  return (
    <div>
 
  <div className="balance">
    <h6>Total:</h6>
    <p>Rs{subTotal}</p>
  </div>
  
    </div>
  )
}

export default Balance;