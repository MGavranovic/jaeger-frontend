import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string | null;
  fullName: string | null;
  email: string | null;
}

const initialState: UserState = {
  id: null,
  fullName: null,
  email: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<UserState>) {
      state.id = action.payload.id;
      state.fullName = action.payload.fullName;
      state.email = action.payload.email;
      // return { ...action.payload };
    },
    logout(state) {
      state.id = null;
      state.fullName = null;
      state.email = null;
    },
  },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
