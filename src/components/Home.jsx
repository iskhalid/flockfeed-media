import React from 'react'
import Header from './Header'
import Blog from './Blog'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux'
import { selectDarkMode } from '../app/themeSlice'

const Home = () => {

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const darkMode = useSelector(selectDarkMode);


  return (
    <div className={` ${darkMode ? 'dark-mode' : 'light-mode'} dark:bg-gray-800 dark:text-white`}>
      <Header/>
      {isAuthenticated && <Sidebar/>}
      <Blog/>
    </div>
  )
}

export default Home