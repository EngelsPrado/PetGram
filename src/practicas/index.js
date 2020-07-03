import React,{useState,useEffect} from 'react'


const useName=()=>{

    const [name,setName]=useState('Engels')
 
    return [name,setName]  
}



export const Test=()=>{

     const [name,setName]=useName()
     useEffect(()=>{
         console.log(name)
     },[name])

    return (
        <div>
    
            <input value={name} onChange={event=>setName(event.target.value)}></input>
        </div>
    )
        
    
}