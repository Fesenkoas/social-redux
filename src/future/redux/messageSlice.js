import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  message:'',
  ilLogin: false,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    getPhotoMessage(state, action) {
        console.log(action.payload.messages[0]);
      if (!action.payload.resultCode)state.message = action.payload.messages[0];
       state.message = "Your photo load...";
      
    },
    getLoginMessage(state, action){
      state.message = action.payload
    }
  },
});
export default messageSlice.reducer;
export const { getPhotoMessage, getLoginMessage } = messageSlice.actions;
