import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileFetch,
  getStatusFetch,
  putPRofileFullFetch,
  putStatusFetch,
  putPhotoFetch,
} from "../future/action/getUsersFetch";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaVk,
  FaTwitter,
  FaYoutube,
  FaChrome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getStatus } from "../future/redux/userSlice";

// Забросил урок на 80 серии из-за кучи ошибок старого кода,решил переделать все на новый REACT-REDUX_RTK. Сделал с хуками не как в видео-уроке React 2022
// REACT-REDUX-RTK, JAVASCRIPT, TYPESCRIPT, JAVA
//https://www.facebook.com/fesenkoas
//https://github.com/Fesenkoas
//https://vk.com/id8071280

export const Setting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, loading } = useSelector((state) => state.user);
  const { message } = useSelector((state) => state.message);

  const [facebook, setFacebook] = useState("");
  const [github, setGithub] = useState("");
  const [instagram, setInstagram] = useState("");
  const [mainLink, setMainLink] = useState("");
  const [twitter, setTwitter] = useState("");
  const [vk, setVk] = useState("");
  const [website, setWebsite] = useState("");
  const [youtube, setYoutube] = useState("");
  const [photo, setPhoto] = useState("");
  const [aboute, setAboute] = useState("");
  const [forJob, setForJob] = useState("0");
  const [isChecked, setIsChecked] = useState(false);
  const [newStatus, setStatus] = useState("");

//   const loadState = () => {
//     if (loading) {
//       setFacebook(profile.contacts.facebook);
//       setGithub(profile.contacts.github);
//       setInstagram(profile.contacts.instagram);
//       setMainLink(profile.contacts.mainLink);
//       setTwitter(profile.contacts.twitter);
//       setVk(profile.contacts.vk);
//       setWebsite(profile.contacts.website);
//       setYoutube(profile.contacts.youtube);
//       setAboute(profile.aboutMe);
//       setForJob(profile.lookingForAJobDescription);
//       setIsChecked(profile.lookingForAJob);
//       setStatus(status);
//     }
//   };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handlePhoto = () => {
    const data = new FormData();
    if (photo) {
      data.append("image", photo);
      dispatch(putPhotoFetch(data));
      dispatch(getProfileFetch("24948"));
      setPhoto("");
      toast(message);
      navigate("/");
    } else toast("Choose Image file");
  };
  const handleStatus = () => {
    const objStatus = {
      status: newStatus,
    };
    dispatch(putStatusFetch(objStatus));
    dispatch(getStatusFetch());
    navigate("/");
    toast("Status changed");
  };
  const handeleSave = () => {
    try {
      const objProfile = {
        aboutMe: aboute || profile.aboutMe,
        contacts: {
          facebook,
          website,
          vk,
          twitter,
          instagram,
          youtube,
          github,
          mainLink,
        },
        fullName: "Casper",
        lookingForAJob: isChecked,
        lookingForAJobDescription: forJob,
      };
      dispatch(putPRofileFullFetch(objProfile));
      dispatch(getProfileFetch("24948"));
      navigate("/");
      toast("Profile changed");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(getProfileFetch("24948"));
    dispatch(getStatus());
     //loadState();
  }, [dispatch]);

  return (
    <>
      {loading && (
        <>
          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
            Cange Photo:
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">
                Put New Photo:
              </div>
              <input
                type="file"
                onChange={(e) => setPhoto(e.target.files[0])}
              />
              <div className="">
                {photo && (
                  <img src={URL.createObjectURL(photo)} alt={photo.name} />
                )}
              </div>
            </div>
            <div className="text-center">
              <button
                onClick={handlePhoto}
                className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
            Status:
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">Status:</div>
              <input
                type="text"
                onChange={(e) => setStatus(e.target.value)}
                value={newStatus}
                placeholder="status"
              />
            </div>
            <div className="text-center">
              <button
                onClick={handleStatus}
                className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>

          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
            <div>
              Contacts:
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaFacebook className="h-4 m-1" /> Facebook:
                </div>
                <input
                  className="w-96"
                  onChange={(e) => setFacebook(e.target.value)}
                  type="text"
                  placeholder="Facebook"
                  value={facebook}
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex   items-center  mb-1 rounded-lg">
                  <FaGithub className="h-4 m-1" /> GitHub:
                </div>
                <input
                  onChange={(e) => setGithub(e.target.value)}
                  type="text"
                  placeholder="GitHub"
                  value={github}
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex   items-center  mb-1 rounded-lg">
                  <FaInstagram className="h-4 m-1" /> Instagram:
                </div>
                <input
                  onChange={(e) => setInstagram(e.target.value)}
                  value={instagram}
                  type="text"
                  placeholder="Instagram"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaLinkedin className="h-4 m-1" /> Linkedin:
                </div>
                <input
                  onChange={(e) => setMainLink(e.target.value)}
                  value={mainLink}
                  type="text"
                  placeholder="Linkedin"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaTwitter className="h-4 m-1" /> Twitter:
                </div>
                <input
                  onChange={(e) => setTwitter(e.target.value)}
                  value={twitter}
                  type="text"
                  placeholder="Twitter"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaVk className="h-4 m-1" />
                  VK:
                </div>
                <input
                  onChange={(e) => setVk(e.target.value)}
                  value={vk}
                  type="text"
                  placeholder="VK"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex  items-center  mb-1 rounded-lg">
                  <FaChrome className="h-4 m-1" /> WebSite:
                </div>
                <input
                  onChange={(e) => setWebsite(e.target.value)}
                  value={website}
                  type="text"
                  placeholder="WebSite"
                />
              </div>
              <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
                <div className="flex items-center  mb-1 rounded-lg">
                  <FaYoutube className="h-4 m-1" /> YouTube:
                </div>
                <input
                  onChange={(e) => setYoutube(e.target.value)}
                  type="text"
                  placeholder="YouTube"
                  value={youtube}
                />
              </div>
              <div className="text-center">
                <button
                  onClick={handeleSave}
                  className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
                >
                  Save
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white bg-opacity-30   h-min-96 mr-5 m-5 p-5  rounded-lg">
            Aboute Me:
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">
                Aboute Me:
              </div>
              <textarea
                onChange={(e) => setAboute(e.target.value)}
                value={aboute}
                className="w-full h-28"
                placeholder={profile.contacts.aboutMe}
              />
            </div>
            <div className=" bg-white bg-opacity-30 mr-5 m-5 p-5  rounded-lg">
              <div className="flex items-center  mb-1 rounded-lg">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleOnChange}
                />
                Looking For A Job?
              </div>
              {isChecked && (
                <textarea
                  onChange={(e) => setForJob(e.target.value)}
                  value={forJob}
                  className="w-full h-28"
                  placeholder="Looking For A Job"
                />
              )}
            </div>
            <div className="text-center">
              <button
                onClick={handeleSave}
                className="text-lg w-28 my-3 border-black border-solid border  bg-gray-300 hover:bg-gray-600 bg-opacity-70 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
