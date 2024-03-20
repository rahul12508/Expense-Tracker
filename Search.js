import React, { useState } from 'react'
import './Search.css';
// import History from './History';

const Search = ({addHistory}) => {

   const [text, setText] = useState("");
   const [amount, setAmount] = useState(0);

  //  const [trans, setTrans]  = useState([]);

  //  const addInput = (e) => {
  //     const tempNotes = [...trans, history];
 
  //      tempNotes.push({
  //       text: text,
  //       amount: +amount,
  //       id: [1,2,3,4,5],
  //      })
  //      console.log(text);
  //      console.log(amount)
  //   setTrans(tempNotes);
  //  }

   const addInput = () => {
     const added = {
      text: text,
      id: Math.floor(Math.random() * 100000),
      amount: +amount,
     }
     addHistory(added);
    
   }
   

  return (
    <div>

  <div className="head">
    <h2>Expense Tracker</h2>
  </div>

   <div className="search-bar">
   
   <div className="expenses">
    <h6>Enter Expenses :</h6>
    <input  onChange={(e) => setText(e.target.value)}  type="text" placeholder='Enter Expense Name' />
   </div>

   <div className="amount">
    <h6>Enter Amount</h6>
    <input onChange={(e) => setAmount(e.target.value)}  type="number" placeholder='Enter Expense Amount' />
   </div>

   <div className="btn">
    <button onClick={addInput} >Add Expense</button>
  </div>

   </div>


    


    </div>
  )
}


export default Search
