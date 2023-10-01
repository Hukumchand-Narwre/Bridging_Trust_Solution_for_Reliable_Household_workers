import { create } from "zustand";

const defaultValues = {
  token: null,
  userInfo: null,
  isLoading: false,
};

export const useAuthStore = create((set) => ({
  token: defaultValues.token,
  userInfo: defaultValues.userInfo,
  isLoading: defaultValues.isLoading,
  setDefault: () => {
    set(defaultValues);
  },
  setToken: (token) => {
    set({ token });
  },
  setUserInfo: (userInfo) => {
    set({ userInfo });
  },
  setisLoading: (isLoading) => {
    set({ isLoading });
  },
}));
