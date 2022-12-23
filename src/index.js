import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import {Posts, Login, PostDetail, Register, Profile, Submit, Search} from './Components';
import { getPosts, stayLogged, logout } from './api';

const App = ()=> {
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({});
  const [token, setToken] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [toEdit, setToEdit] = useState(false);
  
  
  useEffect(()=> {

    getPosts(setPosts);

    stayLogged(setToken, setLoggedIn, setUser);
    
  }, [token])

  
  return (
    <div>
      <div className="Header">
      <h1 id="webTitle">Strangers Things</h1>
      {loggedIn ? <div id='userName'><h3 id ="accountName">{user.username}</h3><div id='icon'><h3>{(user.username.slice(0,1).toUpperCase())}</h3></div></div>:null}
      <nav>
        <Link to='/posts'>Posts ({posts.length})</Link>
        {loggedIn ? <Link to ='/profile'>Profile</Link> :null}
        {!loggedIn ?<Link to='/login'>Login</Link> : <Link onClick={ev =>logout(setUser,setLoggedIn,setLoginPassword,setLoginUsername, setToken)} to ="/login">Logout</Link>}
        {!loggedIn ?<Link to='/register'>Register</Link> : null}
      </nav>
      </div>
      <div className='main'>
      <div className='sidebar'>
        {loggedIn ?<Search setSearchTerm={setSearchTerm}/>: null}
        {loggedIn ?<Submit setPosts={setPosts}/> : null}
      </div>
        <div className='focus'>
          <Routes>
            <Route path ='/posts/:id' element={<div><PostDetail posts={posts} setPosts={setPosts} toEdit={toEdit} setToEdit={setToEdit}/></div>}/>
            <Route path='/register' element={ <Register registerPassword={registerPassword} setRegisterPassword={setRegisterPassword} registerUsername={registerUsername} setRegisterUsername={setRegisterUsername}/>} />
            <Route path='/login' element={ <Login loginPassword={loginPassword} loginUsername={loginUsername} setLoggedIn={setLoggedIn} setLoginPassword={setLoginPassword} setLoginUsername={setLoginUsername} setUser={setUser} setToken={setToken}/>} />
            <Route path = '/profile' element={<div><Profile posts={posts} setPosts={setPosts} user={user} toEdit={toEdit} setToEdit={setToEdit}/></div>}/>
            <Route path='/posts' element= {<Posts posts={posts} loggedIn={loggedIn} searchTerm={searchTerm}/>} />
            <Route path="/" element={<Navigate to="/posts" /> /*Make posts the default page*/} />
          </Routes> 
        </div>
      </div>
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
