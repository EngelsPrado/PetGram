
import {useState} from 'react'




export function useLocalStorage(key,initialValue){
    const [storedValue,setvalue] = useState(()=>{
      try {
        const item= window.localStorage.getItem(key)
        return item!=null?JSON.parse(item):initialValue
      } catch (error) {
        return initialValue
      }
    });
  
    const setLocalStorage= value=>{
      try {
        //guardamos con una key lo que guarda
        window.localStorage.setItem(key,JSON.stringify(value))
        setvalue(value)
      } catch (error) {
        console.log(error)
      }
    }
  
    //el valor guardado y como actualizarlo
    return [storedValue,setLocalStorage]
  }
  