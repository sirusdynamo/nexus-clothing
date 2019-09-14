import React, { Component } from 'react';
import FormInput from "../../components/form-input/form-input.component";
import CustomButton  from "../../components/custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import {ResetPasswordContainer} from "./reset-password.styles.jsx";





class ResetPage extends Component {


    constructor(){
        super()
        this.state= {
            email: ""
        }
    }
     handleSubmit = async(event) =>{
        const {email} = this.state
        
        //email:Email to  which the resetpassword or link would be sent
        if(email.length < 3){
            // Throw an alert if email is not entered before submit button is reached
            // and exit the function
            return alert("Enter email address");
        }
         await auth.sendPasswordResetEmail(email).then(function() {
          if(!email){
              throw new Error("Email was not entered")
          }
        }).catch(function(error) {
          // An error happened.
        });

    }

    handleChange =  (event)  =>{
        const { name , value }  = event.target;

        this.setState({ [name] : value })
    }


    render() {
        const {email}  = this.state
        return(

        <ResetPasswordContainer>

            <h1>Enter email to reset password</h1>
             <form  onSubmit={this.handleSubmit}>
                <FormInput
                name="email"
                type="text"
                handleChange={this.handleChange}
                value={email}
                required
                label="Email"
                />

              <CustomButton type="submit">Submit  </CustomButton>
            </form>


        </ResetPasswordContainer>
            

        )
    }


} 

export default ResetPage;