import React from 'react';


import {Route}  from "react-router-dom";



  
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


// const HatsPage =(props)=>(
//   <div>
//     <h1>HATS PAGE</h1>
//     <h1>HATS PAGE</h1>
//     <button onClick = { ()=> props.history.push('/topics')}>TOPICS</button>
//   </div>
// );

  function App() {
   return(
    <div>
   
  <Route  exact path="/" component= {HomePage}/>
  <Route  exact path="/shop" component= {ShopPage}/>     
        
      

    </div>
  );
}

export default App;
