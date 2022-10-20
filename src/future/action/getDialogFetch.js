const baseURL = "https://social-network.samuraijs.com/api/1.0/";
const API_KEY ="a9ce9252-9216-4a7b-9d67-9f4bbacb4303"
const instanseGet = {
  mode: 'cors',
  credentials: "include",
  method: "GET",
  headers: {
    "API-KEY": API_KEY,
  },
};

const instansePost = {
  mode: 'cors',
  credentials: "include",
  method: "POST",
  headers: {
    "API-KEY": API_KEY,
  },
};

const instanseDelete = {
  mode: 'cors',
  credentials: "include",
  method: "DELETE",
  headers: {
    "API-KEY": API_KEY,
  },
};
//get list of messages with your friend
export const getListDialogFetch = (userId) => (dispatch) => {
  fetch(`${baseURL}dialogs/${userId}/messages`, instanseGet)
    .then((response) => response.data)
    .then((data) => console.log(data,'getListDialogFetch'));
};
//send message to your friend (PUT)
export const setMessageUserFetch = (userId) => (dispatch) => {
  fetch(`${baseURL}dialogs/${userId}/messages`, instansePost)
    .then((response) => response.data)
    .then((data) => console.log(data,'getListDialogFetch'));
};
//is your message viewed
export const getListMessageFetch = (messageId) => (dispatch) => {
  fetch(`${baseURL}dialogs/messages/${messageId}/viewed`, instanseGet)
    .then((response) => response.data)
    .then((data) => console.log(data,'getListMessageFetch'));
};

export const setMesssageSpamFetch = (messageId) => (dispatch) => {
  fetch(`${baseURL}dialogs/messages/${messageId}/spam`, instansePost)
    .then((response) => response.data)
    .then((data) => console.log(data));
};

//delete only for you, not for your companion
export const deleteMessageFetch = (messageId) => (dispatch) => {
  fetch(`${baseURL}dialogs/messages/${messageId}`, instanseDelete)
    .then((response) => response.data)
    .then((data) => console.log(data));
};
//restore your message form deleted and spam (put)
export const restoreMessageFetch = (messageId) => (dispatch) => {
    fetch(`${baseURL}dialogs/messages/${messageId}/restore`, instansePost)
      .then((response) => response.data)
      .then((data) => console.log(data));
  };
//return messages newest than date
  export const returnMessageFetch = (userId,date) => (dispatch) => {
    fetch(`${baseURL}dialogs/${userId}/messages/new?newerThen=${date}`, instanseGet)
      .then((response) => response.data)
      .then((data) => console.log(data));
  };
  //list of new messages
  export const getListNewMessageFetch = () => (dispatch) => {
    fetch(`${baseURL}dialogs/messages/new/count`, instanseGet)
      .then((response) => response.data)
      .then((data) => console.log(data,'getListNewMessageFetch'));
  };
