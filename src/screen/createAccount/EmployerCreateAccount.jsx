import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";

import Button from "../../UI/Button";
import Input from "../../UI/Input";

import FormRow from "../../UI/FormRow";
import classes from "./EmployeeCreateAccount.module.css";

import Heading from "../../UI/Heading";
import { useCommonDetailStore } from "../../store/Auth/common-Detail";
import { createAccountApi } from "../../api/apiInstance";
import Loader from "../../UI/PageLoader";
import Modal from "../../UI/Modal";
import { createUserStore } from "../../store/Auth/createAccount-user";
import UploadImage from "../UploadImage/UploadImage";

const EmployerCreateAccount = () => {
  const {
    email,
    city,
    state,
    address,
    hash_password,
    isLoading,
    setisLoading,
    success,
    setSuccess,
    setHash_password,
    setCity,
    setState,
    setEmail,
    setAddress,
    pincode,
    setPincode,
  } = createUserStore();
  const { first_name, last_name, phone_number, photo_urls } = useCommonDetailStore();

  const handleWorkerCreateAccount = async () => {
    const data = {
      email,
      phone_number,
      last_name,
      first_name,
      city,
      state,
      address,
      pincode,
      hash_password,
      role: "User",
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

export default EmployerCreateAccount;
