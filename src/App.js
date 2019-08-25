import React from 'react';

import {createUserProfileDocument } from './firebase/firebase.utils.js'
import {Switch , Route}  from "react-router-dom";


import {setCurrentUser} from "./redux/user/user.action";
import {connect } from "react-redux"
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header   from  './components/header/header.component.jsx';
import { auth } from  './firebase/firebase.utils';
import SignInAndSignUpPage  from "./pages/sign-in-and -up/sign-in-and-up.component.jsx";

// const HatsPage =(props)=>(
//   <div>
//     <h1>HATS PAGE</h1>
//     <h1>HATS PAGE</h1>
//     <button onClick = { ()=> props.history.push('/topics')}>TOPICS</button>
//   </div>
// );

class App extends React.Component {


  constructor() {
    super();
    

   
  }


  // In javascript there is a huge difference between variables and properties.
  //  Variables get declared using var, let, const,
  //  then they you can assign values to them using the assignment operator (=).
  //  Variables are part of the current scope (everything between { and }), they are not related to objects.
  //  Properties are part of an object. They dont get declared,
  //   they exist after a value gets assigned to them until they are deleted.
  //   So actually you don't need to initialize them.
  //  However, this can lead to some very funny behaviour:


                              //   class Counter {
                              //     constructor(){
                              //       this.count = 0;
                              //     }
                              //     increase(){
                              //       this.count += 1;
                              //     }
                              //  }

// class Counter {

//   count = 0;

//   increase(){
//     this.count += 1;
//   }
// }

  unsubscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
     if(userAuth){

      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          id:snapShot.id,
          ...snapShot.data()
        })
      });
     


     }
     
    setCurrentUser(userAuth)
    console.log(userAuth)
  });
   

  }
  componentWillUnmount() {
   
      this.unsubscribeFromAuth();
     
  }
  
  
  render(){
    return(
      <div className="">
     
     <Header  />
     <Switch>
     
     <Route  exact path="/" component= {HomePage}/>
     <Route  exact path="/shop" component= {ShopPage}/>
     <Route  exact path="/signin" component= {SignInAndSignUpPage}/>     
     </Switch>
          
        
     
      </div>
     );
}
     
}

const mapDispatchToProps = dispatch =>({
setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect( null, mapDispatchToProps)(App);
