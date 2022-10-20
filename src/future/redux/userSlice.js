import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  users: [],
  followers:[],
  totalCount: null,
  status: "",
  profile: {},
  followed: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers(state, action) {
      console.log(action.payload.items);
      state.users = action.payload.items;
      state.totalCount = action.payload.totalCount;
    },
    getProfile(state, action) {
      state.loading = action.payload.loading;
      state.profile = action.payload;
      state.loading = true;
    },
    loading(state, action) {
      state.loading = action.payload;
    },
    getFollowed(state, action) {
      //console.log(action.payload);
      state.followed = action.payload;
    },
    getStatus(state,action){
      state.status = action.payload
    }
  },
});

export default userSlice.reducer;
export const { getUsers, getProfile, loading, getFollowed, getStatus } = userSlice.actions;
