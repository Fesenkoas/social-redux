import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaVk,
  FaTwitter,
  FaYoutube,
  FaChrome,
  FaWhmcs,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutMe = ({ profile }) => {
  return (
    <div className="flex flex-col bg-white bg-opacity-30 w-full  h-min-96 mr-5 my-5 p-5  rounded-lg">
      <div className="text-3xl text-center">{profile.fullName}</div>
      <div>
        <div className=" flex flex-row text-xl text-center items-center">
          Contacts:
          <Link to={"/setting"}>{profile.userId === 24948 && <FaWhmcs />}</Link>
        </div>
        {profile.contacts.facebook ? (
          <div className="flex items-center  mb-1 rounded-lg">
            <FaFacebook className="h-4 m-1" />
            <a href={profile.contacts.facebook}>Facebook</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            <FaFacebook className="h-4 m-1" /> Facebook
          </div>
        )}
        {profile.contacts.github ? (
          <div className="flex  items-center  mb-1 rounded-lg">
            <FaGithub className="h-4 m-1" />
            <a href={profile.contacts.github}>GitHub</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            <FaGithub className="h-4 m-1" /> GitHub
          </div>
        )}
        {profile.contacts.instagram ? (
          <div className="flex   items-center mb-1  rounded-lg">
            <FaInstagram className="h-4 m-1" />{" "}
            <a href={profile.contacts.instagram}>Instagram</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            <FaInstagram className="h-4 m-1" /> Instagram
          </div>
        )}
        {profile.contacts.mainLink ? (
          <div className="flex   items-center mb-1  rounded-lg">
            <FaLinkedin className="h-4 m-1" />{" "}
            <a href={profile.contacts.mainLink}>Linkedin</a>
          </div>
        ) : (
          <div className="flex opacity-40 items-center  mb-1 rounded-lg">
            <FaLinkedin className="h-4 m-1" /> Linkedin
          </div>
        )}
        {profile.contacts.twitter ? (
          <div className="flex   items-center  mb-1 rounded-lg">
            <FaTwitter className="h-4 m-1" />{" "}
            <a href={profile.contacts.twitter}>Twitter</a>
          </div>
        ) : (
          <div className="flex opacity-40 items-center  mb-1 rounded-lg">
            <FaTwitter className="h-4 m-1" /> Twitter
          </div>
        )}
        {profile.contacts.vk ? (
          <div className="flex  items-center  mb-1 rounded-lg">
            <FaVk className="h-4 m-1" /> <a href={profile.contacts.vk}>VK</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            <FaVk className="h-4 m-1" /> VK
          </div>
        )}
        {profile.contacts.website ? (
          <div className="flex  items-center  mb-1 rounded-lg">
            <FaChrome className="h-4 m-1" />{" "}
            <a href={profile.contacts.website}>Website</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            <FaChrome className="h-4 m-1" /> Website
          </div>
        )}
        {profile.contacts.youtube ? (
          <div className="flex  items-center mb-1  rounded-lg">
            <FaYoutube className="h-4 m-1" />{" "}
            <a href={profile.contacts.youtube}>YouTube</a>
          </div>
        ) : (
          <div className="flex opacity-40  items-center  mb-1 rounded-lg">
            <FaYoutube className="h-4 m-1" /> YouTube
          </div>
        )}
      </div>
      <div className="text-xl">About Me:</div>
      <div>
      {profile.aboutMe}
      </div>
      {profile.lookingForAJob && (
        <>
          <div className="text-xl">Looking For A Job:</div>
          <div>{profile.lookingForAJobDescription}</div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
