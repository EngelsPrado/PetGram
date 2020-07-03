import React,{Fragment,useContext,Suspense} from 'react'

import { GlobalStyle } from './styles/GlobalStyles'
import {Detail} from './pages/Detail'
const Favs = React.lazy(() => import('./pages/Favs'))
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import {Home} from './pages/Home'
import { Logo } from './components/Logo'
import {Router, Redirect} from '@reach/router'
import {NavBar} from './components/NavBar'
import {Context} from './Contex'
import { NotFound } from './pages/NotFound';
import { Test } from './practicas';
//Render props que retorna una funcion

export const App = () => {
 
  const {isAuth} =useContext(Context)

  return (

    <Suspense fallback={<div />}>
    <GlobalStyle />
    <Logo />
    <NavBar></NavBar>
    <Router>
    <Test path='/test'></Test>
     <NotFound default ></NotFound>   
        <Home path='/'></Home> 
        <Home path='/pet/:id'></Home>
        <Detail path='/detail/:detailId'> </Detail>
        {!isAuth && <NotRegisteredUser path='/login'></NotRegisteredUser>}
     {!isAuth && <Redirect from='/favs' to='/login' ></Redirect>} 
     {!isAuth && <Redirect from='/user' to='/login'></Redirect>}
      {isAuth && <Redirect from='login' to='/'></Redirect>}   
           
                <Favs path='/favs' />
                <User path='/user' />
  
    </Router>
    {/* Validamos la auntentificacion */}
   
    
      
    </Suspense>

  )
}
