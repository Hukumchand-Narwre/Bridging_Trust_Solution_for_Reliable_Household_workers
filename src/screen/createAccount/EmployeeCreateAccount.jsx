import { createWorkerStore } from "../../store/Auth/createAccount-worker";

const EmployeeCreateAccount = () => {
  const { setEmail } = createWorkerStore();
  return <div>EmployeeCreateAccount</div>;
};

export default EmployeeCreateAccount;
