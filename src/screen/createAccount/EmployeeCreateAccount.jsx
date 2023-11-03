import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";
import { createWorkerStore } from "../../store/Auth/createAccount-worker";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

import FormRow from "../../UI/FormRow";
import classes from "./EmployeeCreateAccount.module.css";

import Heading from "../../UI/Heading";
import { useCommonDetailStore } from "../../store/Auth/common-Detail";
import { createAccountApi } from "../../api/apiInstance";
import Loader from "../../UI/PageLoader";
import Modal from "../../UI/Modal";
import UploadImage from "../UploadImage/UploadImage";

const EmployeeCreateAccount = () => {
  const {
    email,
    aadhar_number,
    city,
    state,
    address,
    dob,
    bank_acc_no,
    gender,
    available_Days,
    available_Hours,
    preferred_work,
    type_of_work,
    salary,
    hash_password,
    setEmail,
    setAadhar_number,
    setCity,
    setState,
    setAddress,
    setDob,
    setBank_acc_no,
    setGender,
    setAvailable_Days,
    setAvailable_Hours,
    setPreferred_work,
    setType_of_work,
    setSalary,
    setHash_password,
    pincode,
    setPincode,
    isLoading,
    setisLoading,
    success,
    setSuccess,
  } = createWorkerStore();
  const { first_name, last_name, phone_number, photo_urls } = useCommonDetailStore();

  const handleWorkerCreateAccount = async () => {
    const data = {
      email,
      phone_number,
      last_name,
      first_name,
      aadhar_number,
      city,
      state,
      address,
      dob,
      bank_acc_no,
      gender,
      available_Days: +available_Days,
      available_Hours: +available_Hours,
      preferred_work,
      type_of_work,
      salary: +salary,
      hash_password,
      role: "Worker",
      pincode,
      photo_urls,
    };
    console.log(data);
    try {
      setisLoading(true);
      await createAccountApi(data);
      setSuccess("success");
    } catch (err) {
      alert("something went wrong");
    }
    setisLoading(false);
  };

  return (
    <>
      <Fade bottom>
        <UploadImage />
      </Fade>
      <Slide bottom delay={200}>
        <div className={classes.container}>
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
                value={first_name}
                disabled
              />
            </FormRow>

            <FormRow label="Last Name">
              <Input type="text" placeholder="LastName" id="LastName" className="w-5/6" value={last_name} disabled />
            </FormRow>
          </div>
          <div className="flex items-center justify-center">
            <FormRow label="Mobile Number">
              <Input placeholder="Phone Number" id="PhoneNumber" className="w-5/6 " value={phone_number} disabled />
            </FormRow>
            <FormRow label="Adhar Number">
              <Input
                type="number"
                placeholder="Adhar Number"
                id="AdharNumber"
                min="12"
                max="12"
                className="w-5/6"
                value={aadhar_number}
                onChange={(e) => setAadhar_number(e.target.value)}
              />
            </FormRow>
          </div>

          <div className="flex items-center justify-center">
            <FormRow label="Date Of Birth">
              <Input
                type="date"
                placeholder="Date Of Birth"
                id="Date Of Birth"
                className="w-5/6"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
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
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
        <div className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Address
          </Heading>
          <div className="flex items-center justify-center">
            <FormRow label="City">
              <Input
                placeholder="City"
                id="City"
                className="w-5/6 "
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FormRow>
            <FormRow label="State">
              <Input
                type="text"
                placeholder="State"
                id="state"
                className="w-5/6 "
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </FormRow>
          </div>
          <div className="flex items-center justify-center">
            <FormRow label="Address">
              <Input
                placeholder="Address"
                id="Address"
                className="w-5/6 "
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FormRow>
            <FormRow label="Pincode">
              <Input
                type="text"
                placeholder="Pincode"
                id="pincode"
                className="w-5/6 "
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </FormRow>
          </div>
        </div>
      </Slide>
      <Slide bottom delay={200}>
        <div className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Login Information
          </Heading>
          <div className="flex items-center justify-center">
            <FormRow label="Email address">
              <Input
                placeholder="Email"
                id="email"
                className="w-5/6 "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormRow>
            <FormRow label="Set Password">
              <Input
                type="password"
                placeholder="Set Password"
                id="Set_Password"
                className="w-5/6 "
                value={hash_password}
                onChange={(e) => setHash_password(e.target.value)}
              />
            </FormRow>
          </div>
        </div>
      </Slide>

      <Slide bottom delay={200}>
        <div className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Add Work Information
          </Heading>
          <div className="flex items-center justify-center">
            <FormRow label="Preferred Works">
              <select
                name="works"
                placeholder="Preferred Works"
                id="works"
                style={{
                  border: "1px solid #d1d5db",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "0.8rem 1.2rem",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
                }}
                className="w-5/6 "
                value={preferred_work}
                onChange={(e) => setPreferred_work(e.target.value)}
              >
                <option value="part-time">Part-Time</option>
                <option value="Full-Time">Full-Time</option>
              </select>
            </FormRow>
            <FormRow label="Available Days">
              <Input
                type="text"
                placeholder="Available_Days"
                id="Sunday"
                name="Sunday"
                className="w-5/6 "
                value={available_Days}
                onChange={(e) => setAvailable_Days(e.target.value)}
              />
            </FormRow>
          </div>
          <div className="flex items-center justify-center">
            <FormRow label="Available Hours">
              <Input
                type="text"
                placeholder="Available Days"
                id="time"
                className="w-5/6 "
                value={available_Hours}
                onChange={(e) => setAvailable_Hours(e.target.value)}
              />
            </FormRow>
            <FormRow label="Type of Work">
              <select
                name="works"
                placeholder="Preferred Works"
                id="works"
                style={{
                  border: "1px solid #d1d5db",
                  backgroundColor: "#fff",
                  borderRadius: "5px",
                  padding: "0.8rem 1.2rem",
                  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
                }}
                className="w-5/6 "
                value={type_of_work}
                onChange={(e) => setType_of_work(e.target.value)}
              >
                <option value="Gardening">Gardening</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Cooking">Cooking</option>
                <option value="Baby Sitting">Baby Sitting</option>
                <option value="Elderly Care">Elderly Care</option>
              </select>
            </FormRow>
          </div>
        </div>
      </Slide>

      <Fade bottom>
        <div className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Employee Bank Details
          </Heading>
          <div className="flex items-center justify-center">
            <FormRow label="Account Number">
              <Input
                type="text"
                placeholder="Account_Number"
                id="Account_Number"
                min="4"
                max="18"
                className="w-5/6 "
                value={bank_acc_no}
                onChange={(e) => setBank_acc_no(e.target.value)}
              />
            </FormRow>
            <FormRow label="Salary">
              <Input
                type="number"
                placeholder="Salary"
                id="Salary"
                className="w-5/6 "
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </FormRow>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="text-center w-full">
          <Button className="w-3/12" style={{ margin: "2rem" }} onClick={handleWorkerCreateAccount}>
            Create Account
          </Button>
        </div>
      </Fade>
      {isLoading && <Loader />}
      {success && <Modal />}
    </>
  );
};

export default EmployeeCreateAccount;
