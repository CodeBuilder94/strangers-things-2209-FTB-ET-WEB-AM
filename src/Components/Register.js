import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api";


const Register = () =>
{   
    const [badRegister, setBadRegister] = useState("");
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const navigate = useNavigate();
    //const {registerUsername, registerPassword, setRegisterUsername, setRegisterPassword} =props;

    const  register = async (ev) =>{
        
        ev.preventDefault();
        await registerUser(registerUsername, registerPassword, setRegisterUsername, setRegisterPassword, setBadRegister, navigate);
    }


    //create a form to log in
    return <div>
        <form className="login" onSubmit ={register}>
            <input className="InUser" placeholder="Username" value ={registerUsername} onChange ={ev => setRegisterUsername(ev.target.value)}></input>
            <input className="password" placeholder="Password" value={registerPassword} onChange = {ev => setRegisterPassword(ev.target.value)}></input>
            <button>Register</button>
            <p className="error">{badRegister}</p>
        </form>
        
    </div>



}


export default Register;
