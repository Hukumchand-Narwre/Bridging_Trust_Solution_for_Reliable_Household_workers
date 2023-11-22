import React, { useState, useEffect } from "react";
import axios from "axios";
import { UpdateHolidayStatusApi, fetchPendingHolidays, getCompletedworkerApi } from "../../api/apiInstance";
import { useAuthStore } from "../../store/Auth";
import UserCard from "../../UI/UserCard copy";
import Loader from "../../UI/PageLoader";
import Modal from "../../UI/Modal";

const AdminHolidayScreen = () => {
  const { token } = useAuthStore();
  const [pendingBookings, setPendingBookings] = useState([]);
  const [workersList, setWorkerList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch the list of pending holiday requests
    async function func() {
      try {
        setIsLoading(true);
        const response = await fetchPendingHolidays(token);
        setPendingBookings(response.data.data);
        const response2 = await getCompletedworkerApi(token);
        setWorkerList(response2.data.data);
      } catch (error) {
        alert("something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    func();
  }, []);

  const acceptRequest = async (bookingId) => {
    // Update the status of the booking to "Accepted" using the API
    try {
      setIsLoading(true);
      await UpdateHolidayStatusApi(bookingId, token);
      const response = await fetchPendingHolidays(token);
      setPendingBookings(response.data.data);
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  console.log(workersList);
  const displayData = pendingBookings?.map((bookings) => {
    let worker = workersList.filter((worker) => worker.id == bookings.worker_id);

    return { ...bookings, ...worker };
  });
  console.log(displayData);

  return (
    <>
      {displayData.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {displayData.map(
            (data) =>
              data[0] && (
                <UserCard
                  key={data.id}
                  user={data}
                  showHire={true}
                  text="Approve Holiday Request"
                  holidayID={data.id}
                  acceptRequest={acceptRequest}
                />
              )
          )}
        </div>
      ) : (
        <Modal msg="No Holiday Requests" Heading="Holiday Update" route="/Admin" />
      )}
      {isLoading && <Loader />}
    </>
  );
};

export default AdminHolidayScreen;
