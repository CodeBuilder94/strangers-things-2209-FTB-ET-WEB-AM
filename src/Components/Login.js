import React, {useState} from "react";
import { useNavigate } from "react-router-dom";


const Login =(props) =>
{
    const [badLogin, setBadLogin] =useState("");
    const navigate = useNavigate();
    const {setUser, setLoggedIn, loginUsername, setLoginUsername, loginPassword, setLoginPassword} =props;

    const logIn = (ev) =>
  {

    ev.preventDefault();
        fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/users/login', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: loginUsername,
          password: loginPassword
        }
      })
    })
    .then(response => response.json())
      .then(result => {
       
        if(!result.success)
        {
          setBadLogin(result.error.message);
          setLoginPassword("");
          setLoginUsername("");
          throw result.error;
        }
        else{
          setBadLogin("");
        }

        const token = result.data.token;
        window.localStorage.setItem("token", token);
        
          fetch('https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am/users/me', {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
          }).then(response => response.json())
          .then(result => {
            const user = result.data;
            setUser(user);
            setLoggedIn(true);
            navigate("/profile");
          })
          .catch(console.error);

          })
      .catch(err => console.log(err));

  }


    //create a form to log in
    return <div>
        <form className="login" onSubmit ={logIn}>
            <input className="InUser" placeholder="Username" value ={loginUsername} onChange={ev =>setLoginUsername(ev.target.value)}></input>
            <input className="password" placeholder="Password" value={loginPassword} onChange={ev =>setLoginPassword(ev.target.value)}></input>
            <button>Login</button>
            <p className="error">{badLogin}</p>
        </form>
        
    </div>
}

export default Login;