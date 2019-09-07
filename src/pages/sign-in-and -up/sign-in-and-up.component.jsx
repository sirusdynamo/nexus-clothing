import React from "react";

import "./sign-in-and-up.style.scss";

import SignIn from "../../stripeCheckout/sign-in/sign-in.component";
import SignUp from "../../stripeCheckout/sign-up/sign-up.component";


const  SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;