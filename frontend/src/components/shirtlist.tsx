import {FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";


function ShirtList(){
    const [shirts,setShirts] = useState<number[]>([]);
    const [query,setQuery] = useState("");
    const url = "http://localhost:3000/shirts";
    const search = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const payload = {
            body:{
                searchQuery:query
            }
        };
        const response = await axios.post(url, payload,  {
                        headers: {
                            'Content-Type': 'application/json'
                            }
                        }
                    );  
        const data = response.data;
        setShirts(data);
    };

    const fetchPost = async() => {
        const payload = {
            body:{
                searchQuery:''
            }
        };
        const response = await axios.post(url,payload, {
            headers: {
                'Content-Type': 'application/json'
                        }
                }
            );       
        const data = response.data;
        setShirts(data);  
    };

    useEffect(()=> {
        fetchPost();
      }, []);


    return(
        <div>
            <form onSubmit={search}>
                <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}></input>
                <button type="submit"> Search</button>
            </form>
            {
                shirts.map(((shirtId)=>{
                    return (
                        <Link to={"/shirts/"+shirtId} key={shirtId}>
                            {shirtId}
                        </Link>
                        )
                        }
                    )
                )
            }
            <Outlet />
        </div>
    );
}

export default ShirtList;