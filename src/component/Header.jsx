import React from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
  const isAuth = false
  return (
  
   <div className="flex  justify-between flex-row h-12 w-full  text-center bg-gray-800 bg-opacity-20 text-white">
   <span className="flex justify-center text-xl   text-white font-extrabold  px-1 py-2">
     SOCIAL - X
   </span>
   <div className="flex bg-gray-400 text-sx text-white rounded-lg px-4 py-2  hover:bg-gray-800">
   <button>{isAuth ? <Link to={"/login"}>Logout</Link> : <Link to={"/login"}>Login</Link>}</button>

   </div>
   </div>
  );
};
