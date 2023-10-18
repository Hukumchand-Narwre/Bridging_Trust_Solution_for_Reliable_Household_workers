import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useHistory } from "react-router-dom";

import FormRowVertical from "../../UI/FormRowVertical";
import Input from "../../UI/Input";
import Button from "../../UI/Button";

import { Dropdown } from "../../UI/Dropdown";
import { useCommonDetailStore } from "../../store/Auth/common-Detail";
function AccountCreationDialog({ isOpen, onClose }) {
  const { first_name, last_name, phone_number, setFirstName, setLastName, setPhoneNumber, role, setRole } =
    useCommonDetailStore();

  const history = useHistory();
  const options = ["Employer", "Employee"];

  const handleSubmit = (e) => {
    // Handle form submission here, e.g., send data to the server
    // You can access the firstName, lastName, and mobileNo state values here
    e.preventDefault();
    if (!first_name && !last_name && !phone_number && !role) {
      alert("All Fields are Required");
    } else {
      console.log(role);
      // Close the dialog
      onClose();
      history.push(`/create-account/${role}`);
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle md:max-w-4xl md:w-full sm:p-6">
              <div className="py-4">
                <h3 className="text-3xl font-semibold text-center ">Create Account</h3>
              </div>
              <div className="space-y-4">
                <FormRowVertical label="First Name" verticalPadding="0.5rem">
                  <Input
                    type="text"
                    id="firstName"
                    autoComplete="username"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    //  disabled={isLoading}
                  />
                </FormRowVertical>
                <FormRowVertical label="Last Name" verticalPadding="0.5rem">
                  <Input
                    type="text"
                    id="lastName"
                    autoComplete="username"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    //  disabled={isLoading}
                  />
                </FormRowVertical>
                <FormRowVertical label="Phone Number" verticalPadding="0.5rem">
                  <Input
                    type="number"
                    id="mobile"
                    autoComplete="username"
                    value={phone_number}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    //  disabled={isLoading}
                  />
                </FormRowVertical>
                <div className="py-3">
                  <Dropdown label="Select An Option:" value={role} setValue={setRole} options={options} />
                </div>
              </div>

              <div className="mt-5 mb-2 sm:mt-6">
                <Button className="w-full" onClick={handleSubmit} size="large">
                  Create Account
                </Button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default AccountCreationDialog;
