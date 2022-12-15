import React from "react";

//import login function from Account.js
import {login} from './Account';

const Login =(props) =>
{
    const {loggedIn, loginUserName, setLoginUserName, loginPassword, setLoginPassword} =props;

    //create a form to log in
    return <div>
        <form className="login" onSubmit ={() => {preventDefault()}}>
            <input className="InUser" placeholder="Username" value ={loginUserName}></input>
            <input className="password" placeholder="Password"></input>
            <button>Login</button>
        </form>
    </div>
}

export default Login;