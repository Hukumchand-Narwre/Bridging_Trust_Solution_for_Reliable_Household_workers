import { createUserStore } from "../../store/Auth/createAccount-user";

const EmployerCreateAccount = () => {
  const { setEmail } = createUserStore();
  return <div>EmployerCreateAccount</div>;
};

export default EmployerCreateAccount;
