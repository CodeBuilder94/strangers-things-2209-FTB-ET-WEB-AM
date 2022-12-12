import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link} from 'react-router-dom';


const App = ()=> {
  const [posts, setPosts] = useState([]);
  
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
      .then(json => {setPosts(json.data.posts)
        console.log(json.data.posts);
      });

  }, [])
  return (
    <div>
      <h1>Strangers Things</h1>
      <nav>
        <Link to='/posts'>Posts ({posts.length})</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
      </nav>
      <Routes>
        <Route path='/posts' element= {posts.map((post, idx) =>{
          return <div key={idx} className="itemPost">
            <div className="postDetails">
              <h2 className="title">{post.title}</h2>
              <h3 className="poster">User:{post.author.username}</h3>
              <h3 className ="location">Location: {post.location}</h3>
              <p className ="details"><em>Details:</em>{post.description}</p>
              <p className="price">{post.price}</p>
              <p className="createDate">{post.createdAt.slice()} @ {post.createdAt.slice(0,10)}</p>
              <p className ="updateDate">{post.updatedAt.slice()} @ {post.updatedAt.slice(0,10)}</p>
            </div>
          </div>
        })}/>
        <Route path='/login' element={ <div>Login</div>} />
        <Route path='/register' element={ <div>Register</div>} />
      </Routes> 
    </div>

  );
};
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<HashRouter><App /></HashRouter>);
