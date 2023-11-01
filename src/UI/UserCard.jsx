import React from "react";

const UserCard = ({ user }) => {
  const { first_name, last_name, type_of_work, salary, photo_urls } = user;
  const imageUrl =
    photo_urls[0] ||
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg";
  return (
    <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white relative mb-12">
      <img src={imageUrl} alt={first_name} className="w-full h-64 object-cover" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-800 mb-2">
          {first_name[0].toUpperCase() + first_name.slice(1) + " " + last_name[0].toUpperCase() + last_name.slice(1)}
        </div>
        <p className="text-gray-600 text-base">Type of work: {type_of_work}</p>
        <p className="text-gray-700 text-base">Salary: ₹{salary}</p>
      </div>
      <button className="w-full bg-indigo-500 text-white font-bold py-2 rounded-b-lg hover:bg-indigo-700 focus:outline-none">
        Hire
      </button>
    </div>
  );
};

export default UserCard;
