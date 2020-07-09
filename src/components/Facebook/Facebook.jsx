 
import React, { useEffect, useState } from "react";
import { FacebookProvider, Login } from "react-facebook";
import { useHistory } from "react-router-dom";

export default function Facebook() {
    const history = useHistory();
    const [facebook, setFacebook] = useState({});
    const handleResponse = (data) => {
        setFacebook(data);
    };

    const handleError = (error) => {
        this.setState({ error });
    };

    useEffect(() => {
        if (facebook.profile !== undefined) {
            history.push("/home");
        }
    }, [facebook, history]);

    return (
        <FacebookProvider appId="596932554551185">
            <Login
                scope="email"
                onCompleted={handleResponse}
                onError={handleError}
            >
                {({ loading, handleClick, error, data }) => (
                    <span onClick={handleClick}>
                        Login via Facebook
                        {loading && <span>Loading...</span>}
                    </span>
                )}
            </Login>
        </FacebookProvider>
    );
}