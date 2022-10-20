import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export const Message = () => {
  const dispatch = useDispatch();
  //const { users, loading } = useSelector((state) => state.user);



  useEffect(()=>{
  },[dispatch]);

  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="flex flex-col bg-white bg-opacity-30 w-56 h-96 m-5 p-5 text-center items-center rounded-lg">

        </div>
    <div className="flex flex-col bg-white bg-opacity-30 w-full  h-min-96 mr-5 my-5 p-5  rounded-lg">
        </div>
        </div>
    </div>
  )
}
