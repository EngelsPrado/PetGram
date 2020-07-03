import React, { createContext, useState } from 'react'
export const Context = createContext()

//el children en todo lo que va a envolver
const Provider = ({ children }) => {

  
  const [isAuth, setIsAuth] = useState(()=>{
    return window.sessionStorage.getItem('token')
  })
 
  // el valor que tendra toda la aplicacion
  const value = {
    isAuth,
    activateAuth: token => {
      setIsAuth(true)
      window.sessionStorage.setItem('token', token)
    },
    removeAuth: () => {
      setIsAuth(false)
      window.sessionStorage.removeItem('token')
    }
  


  }
  //render props
  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}