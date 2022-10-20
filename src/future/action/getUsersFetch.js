import { getPhotoMessage } from "../redux/messageSlice";
import {
  getUsers,
  getProfile,
  loading,
  getFollowed,
  getStatus,
} from "../redux/userSlice";

const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const instanseGet = {
  mode: 'cors',
  method: "GET",
  headers: {
//     "Access-Control-Allow-Origin": "no-cors",
//      'Content-Type': 'application/json',
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
};

const instansePost = {
  credentials: "include",
  method: "POST",
  headers: {
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
};

const instanseDelete = {
  credentials: "include",
  method: "DELETE",
  headers: {
    "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
  },
};

export const getUsersFetch =
  (currentPage = 1) =>
  (dispatch) => {
    fetch(`${baseURL}users?page=${currentPage}&count=18`, instanseGet)
      .then((res) => res.json())
      .then((data) => dispatch(getUsers(data)));
  };

export const postFollowFetch = (id) => (dispatch) => {
  fetch(`${baseURL}follow/${id}`, instansePost).then(
    (response) => response.data
  );
};

export const deleteFollowFetch = (id) => (dispatch) => {
  fetch(`${baseURL}follow/${id}`, instanseDelete).then(
    (response) => response.data
  );
};
//get all list users
export const getFollowFetch = () => (dispatch) => {
//   let pagesCount;
//   const allUser=[]
  fetch(`${baseURL}users`, instanseGet)
    .then((res) => res.json())
    .then((data) =>dispatch(getFollowed(data)));
};

export const getProfileFetch = (id) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}profile/${id}`, instanseGet)
    .then((res) => res.json())
    .then((data) => dispatch(getProfile(data)));
};

export const putStatusFetch = (newData) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}profile/status`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
    },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((data) => dispatch(getPhotoMessage(data)));
};

export const putPRofileFullFetch = (newData) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}profile`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
    },
    body: JSON.stringify(newData),
  })
    .then((res) => res.json())
    .then((data) => dispatch(getPhotoMessage(data)));
};

export const getStatusFetch = () => (dispatch) => {
  fetch(`${baseURL}profile/status/24948`, instanseGet)
    .then((res) => res.json())
    .then((data) => dispatch(getStatus(data)));
};

export const putPhotoFetch = (newData) => (dispatch) => {
  dispatch(loading(false));
  fetch(`${baseURL}profile/photo`, {
    credentials: "include",
    method: "PUT",
    headers: {
      "API-KEY": "e6c298d2-d468-4ac0-a9d1-f103800c1b8a",
    },
    body: newData,
  })
    .then((res) => res.json())
    .then((data) => dispatch(getPhotoMessage(data)));
};
