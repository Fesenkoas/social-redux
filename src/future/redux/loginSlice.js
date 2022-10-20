import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  id: 0,
  email: "",
  login: "",
  loading: false,
  isLogin: false,
  capcha: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getCapcha(state, active) {
      console.log(active.payload);
      state.capcha = active.payload.url;
      state.loading = true
    },
    getMe(state, active) {
      console.log(active.payload.data.id);
      state.id = active.payload.id;
      state.email = active.payload.email
      state.login = active.payload.login
    },
    getLoudingLogin(state, action){
      state.loading=action.payload
    },
  },
});
export default loginSlice.reducer;
export const { getCapcha, getMe, getLoudingLogin } = loginSlice.actions;
