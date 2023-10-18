import axios from "axios";

const baseApiURL = import.meta.env.VITE_REACT_API_URL;

function urlCreator(url) {
  return `${baseApiURL}${url}`;
}

export const loginApi = ({ email, password }) => {
  console.log(email, password);
  return axios.post(
    urlCreator("login"),
    {
      email: email,
      hash_password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const createAccountApi = (data) => {
  return axios.post(urlCreator("signup"), data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
