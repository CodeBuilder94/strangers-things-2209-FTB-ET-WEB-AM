import React from "react";

const Login =(props) =>
{
    const {loggedIn} =props;

    //create a form to log in
    return <div>
        <form id="login" onClick ={() => {preventDefault()}}>
            <input id="InUser" placeholder="Username"></input><br></br>
            <input id="password" placeholder="Password"></input><br></br>
            <button>Login</button>
        </form>
    </div>
}

export default Login;