import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteFollowFetch,
  getUsersFetch,
  postFollowFetch,
} from "../future/action/getUsersFetch";
import { useNavigate } from "react-router-dom";

export const User = ({ user, page, changePage }) => {
  const avatar = user.name.trim().toUpperCase().split("").slice(0, 2);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const followHandle = (user) => {
    if (user.followed) {
      dispatch(deleteFollowFetch(user.id));
      dispatch(getUsersFetch(page));
    } else {
      dispatch(postFollowFetch(user.id));
      dispatch(getUsersFetch(page));
    }
    changePage(page)
  };
  return (
    <div className="flex flex-col justify-between items-center w-44 h-52  mr-5 my-5 bg-white bg- bg-opacity-30 rounded-lg">
      <div className=" w-44 h-14 bg-white bg- bg-opacity-30 rounded-lg">
        {user.photos.small ? (
          <img
            onClick={() => navigate(`/profile/${user.id}`)}
            className="absolute mt-7 ml-14 h-14 rounded-full"
            src={user.photos.small}
            alt="#"
          />
        ) : (
          <div
            onClick={() => navigate(`/profile/${user.id}`)}
            className="absolute mt-7 ml-14  bg-white bg-opacity-70 pt-4 w-14 h-14 text-center rounded-full"
          >
            {avatar}
          </div>
        )}
      </div>
      <div className="pt-5">{user.name}</div>
      <div className="pt-3">{user.status}</div>

      <button
        onClick={(e) => followHandle(user)}
        className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
      >
        {user.followed ? "Unsubscribe" : "Subscribe"}
      </button>
    </div>
  );
};
