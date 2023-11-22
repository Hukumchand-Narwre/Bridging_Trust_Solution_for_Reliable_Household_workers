import React, { useState } from "react";
import { UpdateHolidayStatusApi, createNewBookingApi } from "../api/apiInstance";
import { useAuthStore } from "../store/Auth";
import Loader from "./PageLoader";

const UserCard = ({ user, showHire, text = "Hire", holidayID, acceptRequest }) => {
  console.log(user);
  const { first_name, last_name, type_of_work, salary, photo_urls, id } = user[0];
  const dateTimeString = user.date;
  const datePart = new Date(dateTimeString).toISOString().split("T")[0];
  const { token, user: loggedInUser } = useAuthStore();
  const [isLoading, setIsLoading] = useState(false);
  const imageUrl =
    photo_urls[0] ||
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg";

  // const handleBooking = async (id) => {
  //   try {
  //     setIsLoading(true);
  //     await UpdateHolidayStatusApi(id, token);
  //     setIsLoading(false);
  //     alert("Accepted Successfully");
  //   } catch (err) {
  //     alert("Something went wrong");
  //   }
  // };
  return (
    <>
      <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white relative mb-12">
        <img src={imageUrl} alt={first_name} className="w-full h-64 object-cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl text-gray-800 mb-2">
            {first_name[0].toUpperCase() + first_name.slice(1) + " " + last_name[0].toUpperCase() + last_name.slice(1)}
          </div>
          <p className="text-gray-600 text-base">Type of work: {type_of_work}</p>
          <p className="text-gray-700 text-base">Salary: ₹{salary}</p>
          <p className="text-gray-700 text-base">Date of Holiday: {datePart}</p>
        </div>
        {showHire && (
          <button
            onClick={() => acceptRequest(holidayID)}
            className="w-full bg-indigo-500 text-white font-bold py-2 rounded-b-lg hover:bg-indigo-700 focus:outline-none"
          >
            {text}
          </button>
        )}
      </div>
      {isLoading && <Loader />}
    </>
  );
};

export default UserCard;
