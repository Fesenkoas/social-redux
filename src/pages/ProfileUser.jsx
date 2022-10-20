import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  getFollowFetch,
  getProfileFetch,
  postFollowFetch,
} from "../future/action/getUsersFetch";
import { useSelector } from "react-redux";
import { deleteFollowFetch } from "./../future/action/getUsersFetch";
import AboutMe from "../component/AboutMe";

export const ProfileUser = () => {
  let { userId } = useParams();
  const dispatch = useDispatch();
  const { profile, loading, followed } = useSelector((state) => state.user);

  const followHandle = (user) => {
    if (followed) {
      dispatch(deleteFollowFetch(user.id));
    } else {
      dispatch(postFollowFetch(user.id));
    }
  };

  useEffect(() => {
    dispatch(getProfileFetch(userId));
    dispatch(getFollowFetch(userId));
  }, [dispatch, userId]);

  const status = true;
  return (
    <>
      {loading && (
        <div className="container mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-col bg-white bg-opacity-30 w-56 h-96 m-5 p-5 text-center items-center rounded-lg">
              <div className="rounded-full">
                <img
                  className=" h-42 rounded-full"
                  src={
                    profile.photos.large
                      ? profile.photos.large
                      : "https://openclipart.org/image/800px/177394"
                  }
                  alt="#"
                />
                {status ? (
                  <div className="text-lg my-5 border-black border-solid border  bg-green-500 bg-opacity-70 rounded-lg">
                    ONLINE
                  </div>
                ) : (
                  <div className="text-lg my-5 border-black border-solid border  bg-red-500 bg-opacity-70 rounded-lg">
                    OFFLINE
                  </div>
                )}
                <button
                  onClick={(e) => followHandle(userId)}
                  className="text-lg my-5 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
                >
                  {followed ? "Unsubscribe" : "Subscribe"}
                </button>
              </div>
            </div>
            {/* About ME */}
           <AboutMe profile={profile}/>
          </div>
          {/* My Post */}
          <div className="flex-col mr-5 ml-5 bg-white bg-opacity-30 h-auto rounded-lg text-center items-center">
            <div>text</div>
            <input type="text" />
            <div>
              <button>1</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
