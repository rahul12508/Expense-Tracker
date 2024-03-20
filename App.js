
import './App.css';
import Balance from './components/Balance';
import Income from './components/Income';
import Search from './components/Search';
 import HistoryMap from './components/HistoryMap';
import { useState } from 'react';


function App() {

   const [historys, setHistorys] = useState([
    { id: 1, 
     text : "Burger",
     amount : -40,
    },

    { id: 2, 
      text : "Salary",
      amount : 5000,
     },

     { id: 3, 
      text : "Earphone",
      amount : -500,
     },

     { id: 4, 
      text : "Bonus",
      amount : 2000,
     },

   ]);
 
   const addHistory = (added) => {
    setHistorys(historys => [added, ...historys]);
   }
   

  return (
    <div className="App">
       
       <div className="container">
      <Search historys={historys} addHistory={addHistory} />
      {/* <History historys={historys} /> */}
      <HistoryMap historys={historys} />
      <Income  historys={historys}  />
      <Balance  historys={historys} />

      </div>
      
    </div>
  );
}

export default App;
