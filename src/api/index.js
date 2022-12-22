//For functions
const URL_BASE =`https://strangers-things.herokuapp.com/api/2209-ftb-et-web-am`;
  const POSTS = `/posts`;
  const URL_REGISTER = `/users/register`;
  const LOGIN = `/users/login`;
  const ME_URL =`/users/me/`;
  

  //test URLS
  const TEST_ME = `/test/me`;
  const TEST_DATA = `/test/data`;

export const getPosts = (async(setPosts)=>
{
    //get The posts
    fetch(`${URL_BASE}/posts`)
    .then(response =>{
      return response.json();
    })
    .then(json => {setPosts(json.data.posts)});
})

//login functions
export const stayLogged =(async(setToken, setLoggedIn, setUser) => {
    //make sure user stays logged in after refresh.
    const token = window.localStorage.getItem('token');

    if(token)
    {
      return;
    }

    setToken(token);
  if(token)
  {
        fetch(`${URL_BASE}${ME_URL}`, {
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
}) 

export const logout =(setUser, setLoggedIn, setLoginPassword, setLoginUsername) =>{
    window.localStorage.removeItem('token');
    setUser({});
    setLoggedIn(false);
    setLoginPassword("");
    setLoginUsername("");
  }

  export const registerUser = (async(registerUsername, registerPassword, setRegisterUsername, setRegisterPassword, setBadRegister, navigate) =>
  {
    fetch(`${URL_BASE}${URL_REGISTER}`, {
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

   if(!result.success){
      setBadRegister(result.error.message);
      setRegisterPassword("");
      setRegisterUsername("");
      throw result.error;
    }
    else{
      setBadRegister(result.data.message);
      navigate("/Login");
    }
    
  })
  .catch(err => console.log(err));
  })

export const loginUser = (async(setUser, setLoggedIn, loginUsername, setLoginUsername, loginPassword, setLoginPassword, setToken, setBadLogin, navigate)=>{
  fetch(`${URL_BASE}${LOGIN}`, {
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
        
          fetch(`${URL_BASE}${ME_URL}`, {
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
          }).then(response => response.json())
          .then(result => {
            const user = result.data;
            setUser(user);
            setLoggedIn(true);
            setToken(token);
            navigate("/profile");
          })
          .catch(console.error);

          })
      .catch(err => console.log(err));
})


//add a post
export const addPost = (async(itemName, description, price, location, deliver)=>{
  
  const token = window.localStorage.getItem('token');
  
  fetch(`${URL_BASE}/posts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                title: itemName,
                description: description,
                price: `$${price}`,
                location: location,
                willDeliver: deliver
                }
            })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            
            //reload the page so the post appears
            window.location.reload();
            
        })
        .catch(console.error);
})


//functions to alter posts
export async function edit()
{

}

export async function removePost(id)
{
    const token = window.localStorage.getItem('token');
    //const navigate = useNavigate();

        //remove the item from the api
        fetch(`${URL_BASE}/posts/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(console.error);
}