import React from  "react";
import {Link} from "react-router-dom";
//imported Components
import FormInput from "../form-input/form-input.component";
import CustomButton  from "../custom-button/custom-button.component";
//Stylesheet
import "./sign-up.styles.scss";


import { auth , createUserProfileDocument}  from  "../../firebase/firebase.utils";


class SignUp extends React.Component {
    constructor() {
        super()
        this.state= {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""

        }
        this.handleSubmit= this.handleSubmit.bind(this);
    }

   
    
     async handleSubmit (event){

        event.preventDefault();

        const { password , confirmPassword, email, displayName } = this.state
        if( password !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try {
            const { user,credential }  =  await auth.createUserWithEmailAndPassword(
                email,  
                password
                );

          await  createUserProfileDocument(user, {displayName})
          this.setState( {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""

        })

        ;

        user.sendEmailVerification().then(function() {
          // Email sent.
        }).catch(function(error) {
          // An error happened.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
          } else {
            alert(errorMessage);
          }
         
         console.error("Error sending email verification message ");
          
        });
    
    
    }
         catch (error) {
            console.log(error)
            
        }


    }
    
    handleChange = (event) => {
    
        const { name  , value } =  event.target 
    
        this.setState({
            [name] : value
        })
    
    }


    render(){

        const { displayName, email, password , confirmPassword}  = this.state
        return(

            <div className="sign-up">
                <h2 className="title">I do not have a user account</h2>
                <span>sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>


                <FormInput 
                    name ="displayName"
                    type="text" 
                    // placeholder="abc@xyz.com"
                    handleChange ={this.handleChange}
                    value={displayName}
                    label="Display Name"

                    required/>
                <FormInput 
                    name ="email"
                    type="email" 
                  
                    handleChange ={this.handleChange}
                    value={email}
                    label="Email"

                    required/>

                    <FormInput 
                    name ="password"
                    type="password" 
                   
                    handleChange ={this.handleChange}
                    value={password}
                    label="password"

                    required/>
                      <FormInput 
                    name ="confirmPassword"
                    type="password" 
                   
                    handleChange ={this.handleChange}
                    value={confirmPassword}
                    label=" Confirm Password"

                    required/>



                <CustomButton type="submit" >sign up  </CustomButton>
                </form>

                <Link to="/reset"> Forgot Password </Link>

            </div>
        )
    }
}



export default SignUp;