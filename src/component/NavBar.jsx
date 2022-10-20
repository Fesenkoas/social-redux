import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <div className="p-4 bg-white bg-opacity-40 h-screen flex flex-col gap-2 w-28">
        <Link to={'/'}>Home</Link>
        <Link to={'news'}>News</Link>
        <Link to={'message'}>Message</Link>
        <Link to={'users'}>Users</Link>
      </div>
  )
}
