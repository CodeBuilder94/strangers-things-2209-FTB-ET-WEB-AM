import React from "react";

//import login function from Account.js
import {register} from './Account';

const Register =(props) =>
{
    const {registerUsername, registerPassword, setRegisterUsername, setRegisterPassword} =props;

    //create a form to log in
    return <div>
        <form className="login" onClick ={() => {
            preventDefault()
            //send info to account register function
            register();
            }}>
            <input className="InUser" placeholder="Username" value ={registerUsername} onChange ={ev => setRegisterUsername(ev.target.value)}></input>
            <input className="password" placeholder="Password" value={registerPassword} onChange = {ev => setRegisterPassword(ev.target.value)}></input>
            <button>Login</button>
        </form>
    </div>
}

export default Register;
