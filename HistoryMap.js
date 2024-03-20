
import React from 'react'
import './HistoryMap.css';


const HistoryMap = ({historys}) => {

//   const color = historys.amount >= 0 ? "Green" : "Red";

  return (
    <div>
  
  <nav>
   {
    historys.map((history) => {
 
        const color = history.amount >= 0 ? "Green" : "Red";

        return (
       
            <ul  style={{background : `${color}`, color: 'white' }} >
                <li>{history.text}</li>
                <li>{history.amount}</li>
            </ul>
       
        )
    })
   }

</nav>

    </div>
  )
}

export default HistoryMap