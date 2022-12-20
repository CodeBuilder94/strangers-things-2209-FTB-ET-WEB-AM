import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import {Posts, Login, PostDetail, Register, Profile, Submit} from './Components';

const App = ()=> {
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  
  const URL_BASE =`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am`;
  const POSTS = `/posts`;
  const URL_REGISTER = `/users/register`;
  const LOGIN = `/users/login`;
  const ME_URL =`/users/me/`;
  const POST_ID = `/posts/POST_ID`;
  const MESSAGES = `/posts/POST_ID/messages`;

  //test URLS
  const TEST_ME = `/test/me`;
  const TEST_DATA = `/test/data`;
  
  useEffect(()=> {

    //get The posts
    fetch(`${URL_BASE}/posts`)
    .then(response =>{
      return response.json();
    })
    .then(json => {setPosts(json.data.posts)});

      //make sure user stays logged in after refresh.
      const token = window.localStorage.getItem('token');
      
    if(token)
    {
          fetch('https://strangers-things.herokuapp.com/api/2209-FBT-ET-WEB-AM/users/me', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
    }).then(response => response.json())
      .then(result => {
        const user = result.data;
                
        setUser(user);
        setLoggedIn(true);
        
      })
      .catch(err => console.log(err));
    }
  }, [])


  const logout =() =>{
    window.localStorage.removeItem('token');
    setUser({});
    setLoggedIn(false);
    setLoginPassword("");
    setLoginUsername("");
  }

  return (
    <div>
      <div className="Header">
      <h1>Strangers Things</h1>
      {loggedIn ? <div id='userName'><h3 id ="accountName">{user.username}</h3><div id='icon'><h3>{(user.username.slice(0,1).toUpperCase())}</h3></div></div>:null}
      <nav>
        <Link to='/posts'>Posts ({posts.length})</Link>
        {loggedIn ? <Link to ='/profile'>Profile</Link> :null}
        {!loggedIn ?<Link to='/login'>Login</Link> : <Link to ="/login" onClick={logout}>Logout</Link>}
        {!loggedIn ?<Link to='/register'>Register</Link> : null}
      </nav>
      </div>
      <div className='main'>
      <div className='sidebar'>
        Search
        {loggedIn ?<Submit /> : null}
      </div>
        <div className='focus'>
          <Routes>
            <Route path ='/posts/:id' element={<div><PostDetail posts={posts}/></div>}/>
            <Route path='/register' element={ <Register registerPassword={registerPassword} setRegisterPassword={setRegisterPassword} registerUsername={registerUsername} setRegisterUsername={setRegisterUsername}/>} />
            <Route path='/login' element={ <Login loginPassword={loginPassword} loginUsername={loginUsername} setLoggedIn={setLoggedIn} setLoginPassword={setLoginPassword} setLoginUsername={setLoginUsername} setUser={setUser}/>} />
            <Route path = '/profile' element={<div><Profile /></div>}/>
            <Route path='/posts' element= {<Posts posts={posts} loggedIn={loggedIn}/>} />
            <Route path="/" element={<Navigate to="/posts" /> /*Make posts the default page*/} />
          </Routes> 
        </div>
      </div>
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
