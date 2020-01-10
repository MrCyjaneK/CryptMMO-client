import React from 'react';
import GoogleLogin from 'react-google-login';
import post from '../functions/request.js';
import renderDialog from '../functions/renderDialog.js';
export default function SignIn() {
    return (
        <GoogleLogin
            clientId="982977053736-7l4ffd5alq7b30j7400sl7bmahf4uugh.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={fuck}
            cookiePolicy={'single_host_origin'}
          />
    )
}
const responseGoogle = (response) => {
    post(response.tokenObj.access_token,true)
}
const fuck = (fuc) => {
    renderDialog("Authorisation error.");
}