// Fetch shirts based on search bar filters
// Render ther list of shirts
import {FormEvent, useEffect, useState } from "react";
import Shirt from "./shirt";
import axios from "axios";
import { ShirtProps } from "./shirtprops";


function ShirtList(){
    const [shirts,setShirts] = useState<ShirtProps[]>([]);
    const [query,setQuery] = useState("");
    const url = "http://localhost:3000/shirts";


    const convertToShirtProps = (data: any[]): ShirtProps[] => {
        return data.map(item => {
            const shirt = item[1];
            return {
                id: String(shirt.id),
                size: shirt.size,
                color: shirt.color,
                brand: shirt.brand,
                material: shirt.material,
                favorite: shirt.favorite
            };
        });
    };
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
    const data = convertToShirtProps(response.data);
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
            const data = convertToShirtProps(response.data);
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
                shirts.map(((shirt)=>{
                    console.log("outside shirt",shirts);

                    return (
                        <Shirt id={shirt.id} size={shirt.size} color={shirt.color}  brand={shirt.brand}  material={shirt.material}  favorite={shirt.favorite}/>                            
                    )
                        }
                    )
                )
            }
        </div>
    );
}

export default ShirtList;