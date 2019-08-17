import React from "react";


import "./sign-in.styles.scss";

import  FormInput  from "../form-input/form-input.component";

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
                <span>Sign in with your email and password</span>



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


                    

                    <input  value ="submit"  type="submit"/>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;