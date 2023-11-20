import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuthStore } from "../../store/Auth";
import { getAllUrls, getPendingWorkerByIdApi, updateWorkerStatus } from "../../api/apiInstance";

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Fade";

import Button from "../../UI/Button";
import Input from "../../UI/Input";

import FormRow from "../../UI/FormRow";
import classes from "../../screen/createAccount/EmployeeCreateAccount.module.css";

import Heading from "../../UI/Heading";

import Loader from "../../UI/PageLoader";
import Modal from "../../UI/Modal";
import ImageSimilarityChecker from "../../screen/AIModel/ImageSimilarityChecker";

const DisplayWorkerById = () => {
  const { token } = useAuthStore();
  const [worker, setWorker] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [photoUrls, setPhotoUrls] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const currentUrl = window.location.href;
    const id = currentUrl.split("/").at(-1);
    try {
      // eslint-disable-next-line no-inner-declarations
      async function getPendingWorkers() {
        setIsLoading(true);
        const worker = await getPendingWorkerByIdApi(token, id);
        const photos = await getAllUrls(token);
        setPhotoUrls(photos.data.data);
        setWorker(worker.data.data[0]);
        setIsLoading(false);
      }
      getPendingWorkers();
    } catch (err) {
      alert("Something went wrong");
    }
  }, []);
  const handleApprove = () => {
    const currentUrl = window.location.href;
    const id = currentUrl.split("/").at(-1);
    try {
      // eslint-disable-next-line no-inner-declarations
      async function approveWorker() {
        setIsLoading(true);
        const worker = await updateWorkerStatus(token, id);
        setIsLoading(false);
        alert("Approved Succesfully");
        history.push("/Admin");
      }
      approveWorker();
    } catch (error) {
      alert("Something went wrong");
    }
  };
  console.log(worker);

  const imageUrl =
    worker?.photo_urls?.[0] ||
    "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg";

  console.log(imageUrl);
  return (
    <>
      <Fade bottom>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "6.2rem",
          }}
        >
          {" "}
          <div className="flex items-center space-x-4">
            <div
              style={{ height: "14rem", width: "14rem" }}
              className="relative rounded-full overflow-hidden  ring-2 ring-blue-500"
            >
              <img src={imageUrl} alt={`Profile photo of`} className="w-full h-full object-cover " />
            </div>
          </div>
          <ImageSimilarityChecker referenceImage={imageUrl} imageUrls={photoUrls} />
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
            <FormRow label="Adhar Number">
              <Input
                type="number"
                placeholder="Adhar Number"
                id="AdharNumber"
                min="12"
                max="12"
                className="w-5/6"
                value={worker.aadhar_number}
                disabled
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
                value={worker.dob}
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
                value={worker.pincode ?? "123456"}
                disabled
              />
            </FormRow>
          </div>
        </div>
      </Slide>

      <Slide bottom delay={200}>
        <div style={{ width: 1000 }} className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Work Information
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
                value={worker.preferred_work}
                disabled
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
                value={worker.available_Days}
                disabled
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
                value={worker.available_Hours}
                disabled
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
                value={worker.type_of_work}
                disabled
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
        <div style={{ width: 1000 }} className={classes.container}>
          <Heading as="h3" className={classes.subHeading}>
            Bank Details
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
                value={worker.bank_acc_no}
                disabled
              />
            </FormRow>
            <FormRow label="Salary">
              <Input type="number" placeholder="Salary" id="Salary" className="w-5/6 " value={worker.salary} disabled />
            </FormRow>
          </div>
        </div>
      </Fade>

      <Fade bottom>
        <div className="text-center w-full">
          <Button className="w-3/12" style={{ margin: "2rem" }} onClick={handleApprove}>
            Approve Request
          </Button>
        </div>
      </Fade>
      {isLoading && <Loader />}
      {/* {success && <Modal />} */}
    </>
  );
};

export default DisplayWorkerById;
