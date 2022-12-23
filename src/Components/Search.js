import React, {useState} from "react";

const Search =({setSearchTerm}) =>
{
    //make state to hold the search temporaraly
    const [item, setItem] = useState("");
    const goSearch =(ev)=>
    {
        ev.preventDefault();
        setSearchTerm(item);

    }

    return(<div id="search">
        <h4>Search:</h4>
        <form id="searchForm" onSubmit={goSearch}>
            <input type="text" placeholder="Search here" value={item} onChange={ev =>setItem(ev.target.value)}></input>
            <button>Search</button>
        </form>
    </div>
        
    )
}

export default Search