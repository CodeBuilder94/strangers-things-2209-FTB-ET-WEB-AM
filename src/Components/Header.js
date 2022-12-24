import React from "react";
import {Link} from "react-router-dom";
import {logout} from '../api';

const Header =({user, setUser, setLoggedIn,loggedIn, setLoginPassword,setLoginUsername, setToken, posts}) =>
{
    return <div className="Header">
        <h1 id="webTitle">Strangers Things</h1>
        {loggedIn ? <div id='userName'><h3 id ="accountName">{user.username}</h3><div id='icon'><h3>{(user.username.slice(0,1).toUpperCase())}</h3></div></div>:null}
        <nav>
          <Link to='/posts'>Posts ({posts.length})</Link>
          {loggedIn ? <Link to ='/profile'>Profile</Link> :null}
          {!loggedIn ?<Link to='/login'>Login</Link> : <Link onClick={ev =>logout(setUser,setLoggedIn,setLoginPassword,setLoginUsername, setToken)} to ="/login">Logout</Link>}
          {!loggedIn ?<Link to='/register'>Register</Link> : null}
        </nav>
      </div>
}

export default Header;
