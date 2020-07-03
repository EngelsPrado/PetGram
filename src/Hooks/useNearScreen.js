 
 import {useEffect,useState,useRef} from 'react'
 
  export function useNearScreen(){
    const element = useRef(null)
    const [show, setShow] = useState(false)//mostrar el componente

      useEffect(function () {
      //Importar solo si vamos a usarlo
      Promise.resolve(
      typeof window.IntersectionObserver!='undefined'? window.IntersectionObserver:import('intersection-observer')).then(()=>{
        const observer = new window.IntersectionObserver(function (entries) {
          const { isIntersecting } = entries[0]//Entrada
          console.log(isIntersecting)//Vemos si esta en el viewPort
          if (isIntersecting) {
            setShow(true)//Actualizamos el estado local
            observer.disconnect()//y lo dejamos de observar
          }
        })
        observer.observe(element.current)//Se inicializa
      })
      //Mantiene en observacion un elemento
     
    }, [element])//Se ejecuta cuando cambia el elemento
  
    //Si se muestra y cual
    return [show,element]
  }