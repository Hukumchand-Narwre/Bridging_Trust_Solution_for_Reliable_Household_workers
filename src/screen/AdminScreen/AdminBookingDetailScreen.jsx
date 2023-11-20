import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";
import classes from "../../screen/createAccount/EmployeeCreateAccount.module.css";
import Heading from "../../UI/Heading";
import FormRow from "../../UI/FormRow";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import { useState } from "react";
import Loader from "../../UI/PageLoader";
import Modal from "../../UI/Modal";
import { UpdateBookingStatusApi } from "../../api/apiInstance";
import { useAuthStore } from "../../store/Auth";

const AdminBookingDetailScreen = () => {
  const { token } = useAuthStore();

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { id: ids } = useParams();
  const { state } = useLocation();
  console.log(state);
  const displayData = state.filter((s) => s.id == ids)[0];
  console.log(displayData);

  const handleBooking = async () => {
    try {
      setIsLoading(true);
      const upload = await UpdateBookingStatusApi(ids, token);
      console.log(upload);
      setIsLoading(false);
      setSuccess("abc");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <Fade bottom>
        <h5 className="font-medium">User Detail</h5>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "6.2rem",
          }}
        >
          <div className="flex items-center space-x-4">
            <div
              style={{ height: "14rem", width: "14rem" }}
              className="relative rounded-full overflow-hidden  ring-2 ring-blue-500"
            >
              <img
                src={displayData.user[0]?.photo_urls?.[0]}
                alt={`Profile photo of`}
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </Fade>
      <Slide bottom delay={200}>
        <div style={{ width: 1000 }} className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Personal Information
          </Heading>
          <div className="flex items-center justify-center ">
            <FormRow label="First Name">
              <Input
                type="text"
                placeholder="FirstName"
                id="FirstName"
                className="w-5/6 "
                value={displayData.user[0].first_name}
                disabled
              />
            </FormRow>

            <FormRow label="Last Name">
              <Input
                type="text"
                placeholder="LastName"
                id="LastName"
                className="w-5/6"
                value={displayData.user[0].last_name}
                disabled
              />
            </FormRow>
          </div>
          <div className="flex items-center justify-center ">
            <FormRow label="Phone Number">
              <Input
                type="text"
                placeholder="FirstName"
                id="FirstName"
                className="w-5/6 "
                value={displayData.user[0].phone_number}
                disabled
              />
            </FormRow>

            <FormRow label="City">
              <Input
                type="text"
                placeholder="LastName"
                id="LastName"
                className="w-5/6"
                value={displayData.user[0].city}
                disabled
              />
            </FormRow>
          </div>
        </div>
      </Slide>
      <Fade bottom>
        <h5 className="font-medium">Worker Detail</h5>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "6.2rem",
          }}
        >
          <div className="flex items-center space-x-4">
            <div
              style={{ height: "14rem", width: "14rem" }}
              className="relative rounded-full overflow-hidden  ring-2 ring-blue-500"
            >
              <img
                src={displayData.worker[0]?.photo_urls?.[0]}
                alt={`Profile photo of`}
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </Fade>
      <Slide bottom delay={200}>
        <div style={{ width: 1000 }} className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Personal Information
          </Heading>
          <div className="flex items-center justify-center ">
            <FormRow label="First Name">
              <Input
                type="text"
                placeholder="FirstName"
                id="FirstName"
                className="w-5/6 "
                value={displayData.worker[0].first_name}
                disabled
              />
            </FormRow>

            <FormRow label="Last Name">
              <Input
                type="text"
                placeholder="LastName"
                id="LastName"
                className="w-5/6"
                value={displayData.worker[0].last_name}
                disabled
              />
            </FormRow>
          </div>
          <div className="flex items-center justify-center ">
            <FormRow label="Phone Number">
              <Input
                type="text"
                placeholder="FirstName"
                id="FirstName"
                className="w-5/6 "
                value={displayData.worker[0].phone_number}
                disabled
              />
            </FormRow>

            <FormRow label="City">
              <Input
                type="text"
                placeholder="LastName"
                id="LastName"
                className="w-5/6"
                value={displayData.worker[0].city}
                disabled
              />
            </FormRow>
          </div>
        </div>
      </Slide>
      <Fade bottom>
        <div className="text-center w-full">
          <Button className="w-3/12" style={{ margin: "2rem" }} onClick={handleBooking}>
            Confirm Booking
          </Button>
        </div>
      </Fade>
      {isLoading && <Loader />}
      {success && <Modal Heading="Booking Update" msg="Booking request Approved Successfully" route="/Admin" />}
    </>
  );
};

export default AdminBookingDetailScreen;
