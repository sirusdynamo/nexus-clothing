import React  from "react";
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_tMcZeXgRo5nuXs4usbIT7MP600VeTuXBDY";
    const onToken = token => {
        alert("Success");
        console.log(token);
}

    return (

        <StripeCheckout
        name="nexus Clothing"
        label="Pay now"
        image="https://svgshare.com/i.CUz.svg"
        shippingAddress
        billingAddress
        description={` Your total is $${price}`}
        amount={priceForStripe}
        currency="USD"
        panelLabel="Pay Now"
        token ={onToken}
        stripeKey={publishableKey}
        />
        

    );
};

export default StripeCheckoutButton;