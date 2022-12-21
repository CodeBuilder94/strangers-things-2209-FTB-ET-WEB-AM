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
export const stayLogged =(async(setToken, token, setLoggedIn, setUser) => {
    //make sure user stays logged in after refresh.
    
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

export const logout =(setUser, setLoggedIn, setLoginPassword, setLoginUsername, loggedIn) =>{
    window.localStorage.removeItem('token');
    setUser({});
    setLoggedIn(false);
    console.log(loggedIn);
    setLoginPassword("");
    setLoginUsername("");
  }

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