import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
const defaultValues = {
  token: null,
  userInfo: null,
  isLoading: false,
  user: null,
};

export const useAuthStore = create(
  persist(
    (set) => ({
      token: defaultValues.token,
      userInfo: defaultValues.userInfo,
      isLoading: defaultValues.isLoading,
      setDefault: () => {
        set({ defaultValues });
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
      setUser: (user) => {
        set({ user });
      },
    }),
    {
      name: "login-data", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
