import React, { useEffect } from 'react'
import FigmaDesign2png from './bin/About'
import Header from './components/Header'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import { useDispatch } from 'react-redux'
import { addUser } from './app/userSlice'



const App = () => {
  const dispatch = useDispatch()

  useEffect(()=>{

  const authToken = localStorage.getItem('authToken');

    if (authToken) {
      // Dispatch addUser action with user data from localStorage
      dispatch(addUser({name:"user"}));
    }
  },[dispatch])

  return (<>
    <Home />
  </>
    
  )
}

export default App