import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthStore } from "../../store/Auth";
import { getUserByIdApi } from "../../api/apiInstance";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";

import Button from "../../UI/Button";
import Input from "../../UI/Input";

import FormRow from "../../UI/FormRow";
import classes from "../../screen/createAccount/EmployeeCreateAccount.module.css";

import Heading from "../../UI/Heading";

import Loader from "../../UI/PageLoader";
import Modal from "../../UI/Modal";

const UserAccount = () => {
  const { token, user } = useAuthStore();
  const [worker, setWorker] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    try {
      // eslint-disable-next-line no-inner-declarations
      async function getUserDetail() {
        setIsLoading(true);
        const worker = await getUserByIdApi(token, user.id);
        console.log(worker);
        setWorker(worker.data.data[0]);
        setIsLoading(false);
      }
      getUserDetail();
    } catch (err) {
      alert("Something went wrong");
    }
  }, []);
  const handleApprove = () => {
    // const currentUrl = window.location.href;
    // const id = currentUrl.split("/").at(-1);
    // try {
    //   // eslint-disable-next-line no-inner-declarations
    //   async function approveWorker() {
    //     setIsLoading(true);
    //     const worker = await updateWorkerStatus(token, id);
    //     setIsLoading(false);
    //     alert("Approved Succesfully");
    //     history.push("/Admin");
    //   }
    //   approveWorker();
    // } catch (error) {
    //   alert("Something went wrong");
    // }
  };
  return (
    <>
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
                value={worker.first_name}
                disabled
              />
            </FormRow>

            <FormRow label="Last Name">
              <Input
                type="text"
                placeholder="LastName"
                id="LastName"
                className="w-5/6"
                value={worker.last_name}
                disabled
              />
            </FormRow>
          </div>

          <div className="flex items-center justify-center">
            <FormRow label="Mobile Number">
              <Input
                placeholder="Phone Number"
                id="PhoneNumber"
                className="w-5/6 "
                value={worker.phone_number}
                disabled
              />
            </FormRow>
            <FormRow label="Choose Gender">
              <select
                name="Gender"
                placeholder="Choose_Gender"
                id="gender"
                style={{
                  border: "1px solid #d1d5db",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "0.8rem 1.2rem",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
                }}
                className="w-5/6"
                value={worker.gender}
                disabled
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="TransGender">Others</option>
              </select>
            </FormRow>
          </div>
        </div>
      </Slide>
      <Slide bottom delay={200}>
        <div style={{ width: 1000 }} className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Address
          </Heading>
          <div className="flex items-center justify-center">
            <FormRow label="City">
              <Input placeholder="City" id="City" className="w-5/6 " value={worker.city} disabled />
            </FormRow>
            <FormRow label="State">
              <Input type="text" placeholder="State" id="state" className="w-5/6 " value={worker.state} disabled />
            </FormRow>
          </div>
          <div className="flex items-center justify-center">
            <FormRow label="Address">
              <Input placeholder="Address" id="Address" className="w-5/6 " value={worker.address} disabled />
            </FormRow>
            <FormRow label="Pincode">
              <Input
                type="text"
                placeholder="Pincode"
                id="pincode"
                className="w-5/6 "
                value={worker.pincode}
                disabled
              />
            </FormRow>
          </div>
        </div>
      </Slide>
      <Slide bottom delay={200}>
        <div style={{ width: 1000 }} className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Login Information
          </Heading>
          <div className="flex items-center justify-center">
            <FormRow label="Email address">
              <Input placeholder="Email" id="email" className="w-5/6 " value={worker.email} disabled />
            </FormRow>
            <FormRow label="Set Password">
              <Input
                type="password"
                placeholder="Set Password"
                id="Set_Password"
                className="w-5/6 "
                value={worker.hash_password}
                disabled
              />
            </FormRow>
          </div>
        </div>
      </Slide>

      <Fade bottom>
        <div className="text-center w-full">
          <Button className="w-3/12" style={{ margin: "2rem" }} onClick={handleApprove}>
            Update Account
          </Button>
        </div>
      </Fade>
      {isLoading && <Loader />}
      {/* {success && <Modal />} */}
    </>
  );
};

export default UserAccount;
