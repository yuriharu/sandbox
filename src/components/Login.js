import React from 'react';
import { Link } from "react-router-dom";

/******** Material UI ***************************/
import Button from '@material-ui/core/Button';

function Login() {
    return (
        <div>
            <h1>Welcome to Login!</h1>
            <Link to="/home">
                <Button renderAs="button" variant="contained" id="next-button">
                    Next
                </Button>
            </Link>
        </div>
    );
}

export default Login;