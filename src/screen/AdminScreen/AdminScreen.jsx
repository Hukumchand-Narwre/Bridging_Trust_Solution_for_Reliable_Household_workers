import { NavLink } from "react-router-dom";

const AdminScreen = () => {
  const numberOfUsers = 10;
  return (
    <div className="flex flex-wrap   ">
      <div
        style={{ width: "28rem", marginBottom: "2rem" }}
        className="h-56 p-4 m-4 bg-blue-500 text-white rounded-lg flex flex-col justify-between"
      >
        <div>
          <div className="text-4xl font-bold">{numberOfUsers}+</div>
          <div className="text-2xl">Users Registered</div>
        </div>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-md text-xl">
          <NavLink to="/Admin/users-list">View Users</NavLink>
        </button>
      </div>

      <div
        style={{ width: "28rem" }}
        className="h-56 p-4 m-4 bg-red-500 text-white rounded-lg flex flex-col justify-between"
      >
        <div>
          <div className="text-4xl font-bold">5+</div> {/* Replace with your data */}
          <div className="text-2xl">Workers Registered</div>
        </div>
        <button className="bg-white text-red-500 py-2 px-4 rounded-md text-xl">
          <NavLink to="/Admin/workers-list">View Workers</NavLink>
        </button>
      </div>
      <div
        style={{ width: "28rem" }}
        className="h-56 p-4 m-4 bg-yellow-500 text-white rounded-lg flex flex-col justify-between"
      >
        <div>
          <div className="text-4xl font-bold">5+</div>
          <div className="text-2xl">New Bookings</div>
        </div>
        <button className="bg-white text-red-500 py-2 px-4 rounded-md text-xl">
          <NavLink to="/Admin/Booking">View Bookings</NavLink>
        </button>
      </div>

      <div
        style={{ width: "28rem" }}
        className="w-96 h-56 p-4 m-4 bg-green-500 text-white rounded-lg flex flex-col justify-between"
      >
        <div>
          <div className="text-4xl font-bold">{numberOfUsers}+</div>
          <div className="text-2xl">New Requests</div>
        </div>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-md text-xl">
          <NavLink to="/Admin/NewRequest">View Requests</NavLink>
        </button>
      </div>
      <div
        style={{ width: "28rem" }}
        className="w-96 h-56 p-4 m-4 bg-blue-500 text-white rounded-lg flex flex-col justify-between"
      >
        <div>
          <div className="text-4xl font-bold">{numberOfUsers}+</div>
          <div className="text-2xl">Completed Bookings</div>
        </div>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-md text-xl">
          <NavLink to="/Admin/CompletedBooking">View completed Bookings</NavLink>
        </button>
      </div>
    </div>
  );
};

export default AdminScreen;
