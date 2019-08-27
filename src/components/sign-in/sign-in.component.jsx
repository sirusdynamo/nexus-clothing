import React from "react";


import "./sign-in.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import  FormInput  from "../form-input/form-input.component";

import {signInWithGoogle} from '../../firebase/firebase.utils.js';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : "", 
            password: ""
    }
}
    handleSubmit =(event) =>{
        event.preventDefault()
     this.setState({ email:"", password :"" })

    }
    handleChange = event => {
        const {name ,value} =  event.target
        console.log(name)
        this.setState({
            [name]:value
        })
    }
    

    render() {
        return (
            <div  className="sign-in">
                <h2>I already Have an account</h2>
                <span   className="title"  >Sign in with your email and password</span>



                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name ="email"
                    type="email" 
                    // placeholder="abc@xyz.com"
                    handleChange ={this.handleChange}
                    value={this.state.email}
                    label="Email"

                    required/>
                   


                    <FormInput 
                    name ="password" 
                    type="password" 
                    handleChange ={this.handleChange}
                    value={this.state.password}
                    label="Password" 
                    required/>
            <div className="button">

            <CustomButton  type="submit">
                sign in
            </CustomButton>

            <CustomButton isGoogleSignIn= {true} onClick={signInWithGoogle}> Sign in with google
            </CustomButton>


            </div>
           
                    

                    
                    
                </form>
            </div>
        )
    }
}



export default SignIn;