import React, { useEffect, useState } from "react";
import { getCompletedBookingApi, getCompletedworkerApi, getUsersApi } from "../../api/apiInstance";
import { useAuthStore } from "../../store/Auth";
import Loader from "../../UI/PageLoader";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import { HiArrowRight } from "react-icons/hi2";
import { useHistory } from "react-router-dom";

const AdminCompleteBookingScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [bookingList, setBookingList] = useState([]);
  const [workerList, setWorkerList] = useState([]);
  const [userList, setUserList] = useState([]);
  const { token } = useAuthStore();

  const history = useHistory();

  useEffect(() => {
    async function getPendingBookings() {
      setIsLoading(true);
      const bookingLists = await getCompletedBookingApi(token);
      const workersList = await getCompletedworkerApi(token);
      const usersList = await getUsersApi(token);
      console.log(bookingLists);
      setWorkerList(workersList.data.data);
      setUserList(usersList.data.data);
      setBookingList(bookingLists.data.data);
      setIsLoading(false);
    }
    getPendingBookings();
  }, []);
  const displayBookingData = bookingList.map((booking) => {
    let user = userList.filter((user) => user.id === booking.user_id);
    let worker = workerList.filter((worker) => worker.id === booking.worker_id);
    return { id: booking.id, user: { ...user }, worker: { ...worker } };
  });
  console.log(displayBookingData);

  const handleViewDetail = (e) => {
    const id = e.target.getAttribute("data-id");
    history.push(`/Admin/BookingDetail/${id}`, displayBookingData);
  };
  return (
    <>
      {displayBookingData.length > 0 ? (
        displayBookingData?.map((bookings, index) => (
          <div
            key={index}
            className="bg-zinc-50 p-2 flex items-center justify-between mt-10"
            style={{
              outline: "1px solid #4f46e5",
              borderRadius: 10,
              width: "80rem",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <div className="flex items-end mb-6 ml-12">
              <div
                style={{ transform: `translateY(10px)` }}
                className="w-24 h-24 relative rounded-full overflow-hidden ring-2 mr-4 ring-blue-500"
              >
                <img
                  src={bookings.user[0]?.photo_urls?.[0]}
                  alt={`Profile photo of ${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mr-12 pr-4">
                <h4 className="font-semibold">Full Name</h4>
                <p className="text-2xl">
                  {bookings.user[0].first_name[0].toUpperCase() +
                    bookings.user[0].first_name.slice(1) +
                    " " +
                    bookings.user[0].last_name[0].toUpperCase() +
                    bookings.user[0].last_name.slice(1)}
                </p>
              </div>
              <HiArrowRight style={{ fontSize: "2em", fontWeight: "bold", marginRight: "6rem" }} />

              <div
                style={{ transform: `translateY(10px)` }}
                className="w-24 h-24 relative rounded-full overflow-hidden ring-2 mr-4 ring-blue-500"
              >
                <img
                  src={bookings.worker[0]?.photo_urls?.[0]}
                  alt={`Profile photo of ${name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mr-12 pr-4">
                <h4 className="font-semibold">Full Name</h4>
                <p className="text-2xl">
                  {bookings.worker[0].first_name[0].toUpperCase() +
                    bookings.worker[0].first_name.slice(1) +
                    " " +
                    bookings.worker[0].last_name[0].toUpperCase() +
                    bookings.worker[0].last_name.slice(1)}
                </p>
              </div>
            </div>
            <Button data-id={bookings.id} className="mr-12" size="large" onClick={handleViewDetail}>
              View Booking
            </Button>
          </div>
        ))
      ) : (
        <Modal route="/Admin" Heading="No Completed Request" msg="" />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default AdminCompleteBookingScreen;
