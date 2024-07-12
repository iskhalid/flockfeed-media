import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeUser } from "../app/userSlice";
import { selectDarkMode, toggleDarkMode } from "../app/themeSlice";
import websiteLogo from '../assets/flockfeed-high-resolution-logo-transparent.png';
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


const Header = () => {
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector(selectDarkMode);

  async function verifyToken(token) {
    try {
      const response = await fetch("http://localhost:4000/verify-token", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        // setIsAuthenticated(true);
        // setUser(data.user);
        console.log("Token is valid");
      } else {
        console.log("Token is invalid or expired");
        // setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Error verifying token:", error);
      // setIsAuthenticated(false);
    }
  }



  const handleLogout = () => {
  
        localStorage.removeItem("token");
        // Clear the token cookie by setting it to an expired date
        document.cookie = 'token=; path=/;';

        dispatch(removeUser());
        navigate("/login");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
   };

   const handleToggle = () => {
    dispatch(toggleDarkMode());

   }

  return (
    <div className={` ${darkMode ? 'dark-mode' : 'light-mode'} dark:bg-gray-800 dark:text-white font-sans bg-gray-100  py-4 fixed top-0 left-0 right-0 w-full z-50 px-12 flex items-baseline justify-between shadow-lg border-b-2 mb-12 border-gray-100`}>
      <Link to={"/"} className=" w-40  pr-7 mx-2 cursor-pointer px-2">
       <img src={websiteLogo} />
      </Link>
      <div className=" text-[17px] font-semibold">
        <ul className=" flex gap-6">
        <li className=" hover:text-blue-800   duration-75 transition-all ease-out">
           <button className="" onClick={handleToggle}>{darkMode ? <MdDarkMode className="" />  : <MdOutlineLightMode className=" text-lg" />}</button>
          </li>
          <li className=" hover:text-blue-800   duration-75 transition-all ease-out">
            <NavLink exact to="/" activeclassNameName="active">
              Blogs
            </NavLink>
          </li>
          <li className=" hover:text-blue-800  duration-75 transition-all ease-out">
            <NavLink exact to="/login" activeclassNameName="active">
              {user ? (
                <button
                  className="-mt-2 hover:bg-blue-900 bg-blue-700 w-20 sm:w-24 px-2 py-2 text-white rounded-md"
                  onClick={handleLogout}
                >
                  Log out
                </button>
              ) : (
                <button className=" -mt-2 hover:bg-blue-900 bg-blue-700 w-20  px-2 py-2 text-white rounded-md">
                  Log in
                </button>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
