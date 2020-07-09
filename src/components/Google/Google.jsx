import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

export default function Google() {
    const history = useHistory();
    const responseGoogle = (response) => {
        if (response !== null) {
            history.push("/");
        }
    };

    return (
        <GoogleLogin
            clientId="1070894207365-afdbo64b0ifi5egkls9j10pi9oe78f66.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
        />
    );
}