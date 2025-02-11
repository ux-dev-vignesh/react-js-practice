import React,{useState,useEffect} from "react";
import axios from "axios";

const Home=()=>{

    const [items,setItems]=useState([]);

    useEffect(()=>{
        axios
        .get('http://localhost:5000/api/items') 
        .then((response)=>{
            setItems(response.data)
        })
        .catch((error)=>{
            console.log(error);
            
        })
    },[])

    return(
        <>
        <ul>
            {
                items.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))
            }
        </ul>
        </>
    )
}

export default Home;