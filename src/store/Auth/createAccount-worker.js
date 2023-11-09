import { create } from "zustand";

const defaultValues = {
  email: "",
  aadhar_number: "",
  city: "",
  state: "",
  address: "",
  dob: "",
  bank_acc_no: "",
  gender: "Male",
  available_Days: null,
  available_Hours: null,
  preferred_work: "Part-Time",
  type_of_work: "Gardening",
  salary: null,
  hash_password: "",
  pincode: "",
  isLoading: false,
  success: null,
  error: null,
};

export const createWorkerStore = create((set) => ({
  email: defaultValues.email,
  phone_number: defaultValues.phone_number,
  last_name: defaultValues.last_name,
  first_name: defaultValues.first_name,
  aadhar_number: defaultValues.aadhar_number,
  city: defaultValues.city,
  state: defaultValues.state,
  address: defaultValues.address,
  dob: defaultValues.dob,
  bank_acc_no: defaultValues.bank_acc_no,
  gender: defaultValues.gender,
  available_Days: defaultValues.available_Days,
  available_Hours: defaultValues.available_Hours,
  preferred_work: defaultValues.preferred_work,
  type_of_work: defaultValues.type_of_work,
  salary: defaultValues.salary,
  hash_password: defaultValues.hash_password,
  pincode: defaultValues.pincode,
  isLoading: defaultValues.isLoading,
  success: defaultValues.success,
  error: defaultValues.error,
  setDefaults: () => {
    set(defaultValues);
  },
  setEmail: (email) => {
    set({ email });
  },
  setPhone_number: (phone_number) => {
    set({ phone_number });
  },
  setLast_name: (last_name) => {
    set({ last_name });
  },
  setFirst_name: (first_name) => {
    set({ first_name });
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
  setPincode: (pincode) => {
    set({ pincode });
  },
  setisLoading: (isLoading) => {
    set({ isLoading });
  },
  setSuccess: (success) => {
    set({ success });
  },
  setError: (error) => {
    set({ error });
  },
}));
