import styled ,{css} from "styled-components"



export const CustomButtonContainer = styled.button`


display: inline-block;
padding: 0 25px 0 25px;
// margin: 10px;
height: 50px;
line-height: 50px;
min-width: 165px;
width: auto;
text-transform: uppercase;
border: none;
cursor: pointer;
// border-radius: 100px;
// font-family: 'Open Sans Condensed';
background-color: #000;
color: #fff;
font-weight: bolder;
letter-spacing: 2px;
display: flex;
justify-content: center;
box-shadow: 2px 4px 5px rgba(#000, 0.4);
transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

&:hover {
    transform: translateY(-4px);
    background-color: white;
    color: black;
    border: 1px solid black;
}

${({isGoogleSignIn, inverted}) => isGoogleSignIn ? css`

background-color: #4285f4 !important;
        color: white;
        padding: 0 10px 0 10px;
        border: none;

        margin-left: 10px;
        &:hover {
            color:white;
            background-color: #357ae8 !important;
            transform: translateY(-4px);
        }
        `: 
            inverted ? css`
            background-color: #fff;
            border: 1px solid black;
            color: #000;
            transition: all 0.3s ease-in-out;` : ""     }





`