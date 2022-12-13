import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';
import {Posts} from './Components';


const App = ()=> {
  const [posts, setPosts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  
  const URL_BASE =`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am`;
  const POSTS = `/posts`;
  const REGISTER = `/users/register`;
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

  }, [])
  return (
    <div>
      <div className="Header">
      <h1>Strangers Things</h1>
      <nav>
        <Link to='/posts'>Posts ({posts.length})</Link>
        {loggedIn ? <Link to ='/profile'>Profile</Link> :null}
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      </div>
      <Routes>
        <Route path='/posts' element= {<Posts posts={posts}/>} />
        <Route path = '/profile' element={<div>Profile</div>}/>
        <Route path='/login' element={ <div>Login</div>} />
        <Route path='/register' element={ <div>Register</div>} />
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
