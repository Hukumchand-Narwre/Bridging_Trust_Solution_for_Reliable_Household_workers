import axios from "axios";

const baseApiURL = import.meta.env.VITE_REACT_API_URL;

function urlCreator(url) {
  return `${baseApiURL}${url}`;
}

export const loginApi = ({ email, password }) => {
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

export const getPendingWorkerApi = (token) => {
  return axios.get(urlCreator("workers/pending"), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const createNewBookingApi = (data, token) => {
  console.log(data);
  return axios.post(urlCreator("bookings"), data, {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const UpdateBookingStatusApi = (id, token) => {
  return axios.post(
    urlCreator(`booking/update/status/${id}`),
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }
  );
};

export const getPendingBookingApi = (token) => {
  return axios.get(urlCreator("booking/pending"), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const getCompletedBookingApi = (token) => {
  return axios.get(urlCreator("booking/completed"), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const getPendingWorkerByIdApi = (token, id) => {
  return axios.get(urlCreator(`worker/${id}`), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const updateWorkerStatus = (token, id) => {
  return axios.post(
    urlCreator(`worker/update/status/${id}`),
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }
  );
};

export const getCompletedworkerApi = (token) => {
  return axios.get(urlCreator(`workers/completed`), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const getUsersApi = (token, id) => {
  return axios.get(urlCreator(`users`), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const getUserByIdApi = (token, id) => {
  return axios.get(urlCreator(`user/${id}`), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const getAllUrls = (token) => {
  return axios.get(urlCreator(`worker/photourls`), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const fetchPendingHolidays = (token) => {
  return axios.get(urlCreator("holiday/pending"), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};

export const UpdateHolidayStatusApi = (id, token) => {
  return axios.post(
    urlCreator(`holiday/update/status/${id}`),
    {},
    {
      headers: {
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    }
  );
};

export const getWorkerByIdApi = (token, id) => {
  return axios.get(urlCreator(`worker/${id}`), {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  });
};
