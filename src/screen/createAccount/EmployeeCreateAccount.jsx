import { createWorkerStore } from "../../store/Auth/createAccount-worker";
import Button from "../../UI/Button";
import Input from "../../UI/Input";

import FormRow from "../../UI/FormRow";
import classes from "./EmployeeCreateAccount.module.css";

import Row from "../../UI/Row";
import Heading from "../../UI/Heading";

const EmployeeCreateAccount = () => {
  const {
    setEmail,
    setPhone_number,
    setLast_name,
    setFirst_name,
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
  } = createWorkerStore();

  return (
    <>
      <Row>
        <Heading as="h1">Create Employee Account</Heading>
      </Row>
      <Heading as="h3" className={classes.subHeading}>
        Employee Personal Information
      </Heading>
      <div className={classes.container}>
        <FormRow label="First Name">
          <Input type="text" placeholder="FirstName" id="FirstName" />
        </FormRow>

        <FormRow label="Last Name">
          <Input type="text" placeholder="LastName" id="LastName" />
        </FormRow>

        <FormRow label="Phone Number">
          <Input placeholder="Phone_Number" id="PhoneNumber" />
        </FormRow>

        <FormRow label="Adhar Number">
          <Input
            type="number"
            placeholder="Adhar_Number"
            id="AdharNumber"
            min="12"
            max="12"
          />
        </FormRow>
        <FormRow label="Date Of Birth">
          <Input type="date" placeholder="Date Of Birth" id="Date Of Birth" />
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
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="TransGender">Transgender</option>
          </select>
        </FormRow>
      </div>

      <Row>
        <Heading as="h3" className={classes.subHeading}>
          Employee Login Information
        </Heading>
      </Row>
      <div className={classes.subContainer}>
        <FormRow label="Email address">
          <Input placeholder="email" id="email" />
        </FormRow>
        <FormRow label="Set Password">
          <Input type="password" placeholder="Set_Password" id="Set_Password" />
        </FormRow>
      </div>

      <Heading as="h3" className={classes.subHeading}>
        Add Work Information
      </Heading>
      <div className={classes.subContainer}>
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
          />
        </FormRow>
        <FormRow label="Available Hours">
          <Input type="time" placeholder="Available_Days" id="time" />
        </FormRow>
      </div>
      <Row>
        <Heading as="h3" className={classes.subHeading}>
          Employee Bank Details
        </Heading>
      </Row>
      <div className={classes.subContainer}>
        <FormRow label="Account Number">
          <Input
            type="text"
            placeholder="Account_Number"
            id="Account_Number"
            min="4"
            max="18"
          />
        </FormRow>
        <FormRow label="Salary">
          <Input type="number" placeholder="Salary" id="Salary" />
        </FormRow>
      </div>
      <FormRow>
        <div className={classes.centerItem}>
          <Button type="reset" variation="secondary">
            Cancel
          </Button>
          <Button style={{ margin: "2rem" }}>Add account</Button>
        </div>
      </FormRow>
    </>
  );
};

export default EmployeeCreateAccount;
