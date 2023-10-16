import { create } from "zustand";

const defaultValues = {
  email: "",
  city: "",
  state: "",
  address: "",
  hash_password: "",
};

export const createUserStore = create((set) => ({
  email: defaultValues.email,
  phone_number: defaultValues.phone_number,
  city: defaultValues.city,
  state: defaultValues.state,
  address: defaultValues.address,
  hash_password: defaultValues.hash_password,
  role: defaultValues.role,
  setDefault: () => {
    set(defaultValues);
  },
  setEmail: (email) => {
    set({ email });
  },
  setAadhar_number: (aadhar_number) => {
    set({ aadhar_number });
  },
  setCity: (city) => {
    set({ city });
  },
  setState: (state) => {
    set({ state });
  },
  setAddress: (address) => {
    set({ address });
  },
  setDob: (dob) => {
    set({ dob });
  },
  setBank_acc_no: (bank_acc_no) => {
    set({ bank_acc_no });
  },
  setGender: (gender) => {
    set({ gender });
  },
  setAvailable_Days: (available_Days) => {
    set({ available_Days });
  },
  setAvailable_Hours: (available_Hours) => {
    set({ available_Hours });
  },
  setPreferred_work: (preferred_work) => {
    set({ preferred_work });
  },
  setType_of_work: (type_of_work) => {
    set({ type_of_work });
  },
  setSalary: (salary) => {
    set({ salary });
  },
  setHash_password: (hash_password) => {
    set({ hash_password });
  },
}));
