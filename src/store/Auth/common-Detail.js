import { create } from "zustand";

const defaultValues = {
  phone_number: "",
  last_name: "",
  first_name: "",
  role: "",
};

export const useCommonDetailStore = create((set) => ({
  first_name: defaultValues.first_name,
  last_name: defaultValues.last_name,
  phone_number: defaultValues.phone_number,
  role: defaultValues.role,
  setDefault: () => {
    set(defaultValues);
  },
  setFirstName: (first_name) => {
    set({ first_name });
  },
  setLastName: (last_name) => {
    set({ last_name });
  },
  setPhoneNumber: (phone_number) => {
    set({ phone_number });
  },
  setRole: (role) => {
    set({ role });
  },
}));
