import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { ShirtProps } from "./shirtprops";
import { useParams } from "react-router-dom";

function Shirt(){
    const url = "http://localhost:3000/shirts/";
    const [shirt, setShirt] = useState<ShirtProps>();
    const [selectedTag,setSelectedTag] = useState("");
    const [favorite,setFavorite] = useState(false);

    const {id} = useParams();  

    const fetchGet = async() => {
        const response = await axios.get(url+id);
        console.log(response);
        setShirt(response.data);
    };

    const saveForm = async(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const payload = {
                body:{
                    id:shirt?.id
                }
            };

        await axios.post(url+"favorite", payload,  {
                        headers: {
                            'Content-Type': 'application/json'
                            }
                        }
                    );  
        fetchGet();

        };

    useEffect(()=> {
        fetchGet();
      }, []);
    return(
        <div>
            <div>{shirt?.brand}</div>
            <div>{shirt?.color}</div>
            <div>{shirt?.material}</div>
            <div>{shirt?.size}</div>   
            <div>{shirt?.favorite}</div> 
            <form onSubmit={saveForm}>
                <input type="checkbox" onChange={() => setFavorite(!favorite)}/>
                <label>
                    Add tags
                    <select value={selectedTag} onChange={e => setSelectedTag(e.target.value)}>
                        <option value="party">party</option>
                        <option value="sleep">sleep</option>
                        <option value="office">office</option>
                        <option value="casual">casual</option>
                    </select>  
                </label>
                <button type="submit"> Save Changes</button>
            </form>         
        </div>
    )
}

export default Shirt