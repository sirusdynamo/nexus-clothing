import React from  "react";
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

        const { password , confirmPassword, email, displayName } = this.state
        if( password !== confirmPassword){
            alert("passwords do not match");
            return;
        }

        try {
            const { user }  = auth.createUserWithEmailAndPassword(
                email,  
                password
                );

          await  createUserProfileDocument(user, {displayName})
          this.setState( {
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""

        })}
         catch (error) {
            console.log(error)
            
        }


    }
    
    handleChange =   (event)=> {
    
        const { name  , value} =  event.target 
    
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
            </div>
        )
    }
}



export default SignUp;