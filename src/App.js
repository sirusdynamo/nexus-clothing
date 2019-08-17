import React from 'react';


import {Switch , Route}  from "react-router-dom";



  
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header   from  './components/header/header.component.jsx';
import SignInAndSignUpPage  from "./pages/sign-in-and -up/sign-in-and-up.component.jsx";


// const HatsPage =(props)=>(
//   <div>
//     <h1>HATS PAGE</h1>
//     <h1>HATS PAGE</h1>
//     <button onClick = { ()=> props.history.push('/topics')}>TOPICS</button>
//   </div>
// );

  function App() {
   return(
    <div className="">

   <Header />
   <Switch>

  <Route  exact path="/" component= {HomePage}/>
  <Route  exact path="/shop" component= {ShopPage}/>
  <Route  exact path="/signin" component= {SignInAndSignUpPage}/>     
   </Switch>
        
      

    </div>
  );
}

export default App;
