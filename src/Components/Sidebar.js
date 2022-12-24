import React from "react";
import { Search, Submit } from "/";

const Sidebar =({loggedIn, setPosts, setSearchTerm})=>
{
   return <div className='sidebar'>
          {loggedIn ?<Search setSearchTerm={setSearchTerm}/>: null}
          {loggedIn ?<Submit setPosts={setPosts}/> : null}
        </div>
}

export default Sidebar;