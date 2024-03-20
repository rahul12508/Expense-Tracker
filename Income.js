import React from 'react'
import './Income.css';

const Income = ({historys}) => {

    const amount = historys.map((history) => history.amount);
    const income = amount.filter((item) => item > 0).reduce((acc, item) => (acc += item),0).toFixed(2);
    const expense = amount.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0 * -1).toFixed(2);

  return (
    <div>

   <div className="container2">
    <div className="income">
        <h6>Income :</h6>
        <p>
            {income}
        </p>
    </div>

  <div className="expense">
    <h6>Expense :</h6>
    <p>{expense}</p>
  </div>

   </div>
    </div>
  )
}

export default Income