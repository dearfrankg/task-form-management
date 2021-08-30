import { createSlice } from "@reduxjs/toolkit";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
const format = "h:mm a";

const initialState = {
  first: "joe",
  last: "",
  address: "171 Alpine Way",
  city: "San Bruno",
  state: "California",
  one: true,
  two: true,
  three: true,
  four: true,
  five: false,
  six: false,
  single: true,
  switch: true,
  voted: "yes",
  choices: "Prop B",
  comment: "",
  birthDate: "2021-08-24T12:17:12.520Z",
  birthTime: "2021-08-24T07:00:00.509Z",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      state = { ...state, ...action.payload };
    },
  },
});

export const { updateForm } = profileSlice.actions;

export const selectProfile = (state) => state.profile;

export default profileSlice.reducer;
