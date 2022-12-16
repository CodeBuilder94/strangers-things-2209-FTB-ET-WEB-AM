import React from "react";


const Register = (props) =>
{
    const {registerUsername, registerPassword, setRegisterUsername, setRegisterPassword} =props;


    const  register = (ev) =>{
        ev.preventDefault();
        fetch('https://strangers-things.herokuapp.com/api/2209-FBT-ET-WEB-AM/users/register', {
            method: "POST",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            user: {
                username: registerUsername,
                password: registerPassword
            }
            })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
        
    }



    //create a form to log in
    return <div>
        <form className="login" onSubmit ={register}>
            <input className="InUser" placeholder="Username" value ={registerUsername} onChange ={ev => setRegisterUsername(ev.target.value)}></input>
            <input className="password" placeholder="Password" value={registerPassword} onChange = {ev => setRegisterPassword(ev.target.value)}></input>
            <button>Submit</button>
        </form>
    </div>



}

export default Register;
