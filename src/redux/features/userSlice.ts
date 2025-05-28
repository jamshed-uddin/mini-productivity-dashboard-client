import { UserInfo } from "@/lib/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  userInfo: UserInfo | null;
  isSideNavOpen: boolean;
}

const storedUserInfo =
  typeof window !== "undefined" ? localStorage.getItem("userInfo") : null;

const initialState: InitialState = {
  userInfo: storedUserInfo ? JSON.parse(storedUserInfo) : null,
  isSideNavOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.userInfo = action.payload;
    },

    removeUser: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },

    toggleSideNav: (state) => {
      state.isSideNavOpen = !state.isSideNavOpen;
    },
  },
});

export const { setUser, removeUser, toggleSideNav } = userSlice.actions;
export default userSlice.reducer;
