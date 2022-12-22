import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";


const Login =(props) =>
{
    const [badLogin, setBadLogin] =useState("");
    const navigate = useNavigate();
    const {setUser, setLoggedIn, loginUsername, setLoginUsername, loginPassword, setLoginPassword, setToken} =props;

    const logIn = async(ev) =>
  {

    ev.preventDefault();
    await loginUser(setUser, setLoggedIn, loginUsername, setLoginUsername, loginPassword, setLoginPassword, setToken, setBadLogin, navigate);

  }


    //create a form to log in
    return <div>
        <form className="login" onSubmit ={logIn}>
            <input className="InUser" placeholder="Username" value ={loginUsername} onChange={ev =>setLoginUsername(ev.target.value)}></input>
            <input className="password" type="password" placeholder="Password" value={loginPassword} onChange={ev =>setLoginPassword(ev.target.value)}></input>
            <button>Login</button>
            <p className="error">{badLogin}</p>
        </form>
        
    </div>
}

export default Login;