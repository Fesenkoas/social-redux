import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfileFetch, getStatusFetch } from "../future/action/getUsersFetch";
import { useSelector } from "react-redux";
import AboutMe from "../component/AboutMe";

export const ProfileMe = () => {
  const dispatch = useDispatch();
  const { profile, loading, status } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getProfileFetch("24948"));
    dispatch(getStatusFetch())
  }, [dispatch]);

  const isstatus = true;
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
                {isstatus ? (
                  <div className="text-lg my-5 border-black border-solid border  bg-green-500 bg-opacity-70 rounded-lg">
                    ONLINE
                  </div>
                ) : (
                  <div className="text-lg my-5 border-black border-solid border  bg-red-500 bg-opacity-70 rounded-lg">
                    OFFLINE
                  </div>
                )}
              </div>
              <div className=" bg-white bg-opacity-40 rounded-lg">
                {status}
              </div>
            </div>
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
