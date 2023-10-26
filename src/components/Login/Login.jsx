import { useEffect, useState } from "react";

import Form from "../../UI/Form";
import FormRowVertical from "../../UI/FormRowVertical";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Divider from "../../UI/Divider";
import AccountCreationDialog from "./AccountCreationDialog";
import { loginApi } from "../../api/apiInstance";
import { useAuthStore } from "../../store/Auth";
import Loader from "../../UI/PageLoader";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { isLoading, setisLoading, setToken, setUserInfo, setUser } = useAuthStore();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    setisLoading(true);

    try {
      const data = await loginApi({ email, password });
      console.log(data.data.data);
      setUser(data.data.data);
      const { first_name, role, token, id } = data.data.data;
      setToken(token);
      setUserInfo({ first_name, role, id });
      console.log(role);
      history.push(`/${role}`);
      console.log("run");
    } catch (error) {
      console.log(error);
      alert("Login failed");
    }
    //const res = await data.json();
    setisLoading(false);
  }
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormRowVertical label="Email address">
          <Input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            //  disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical label="Password">
          <Input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // disabled={isLoading}
          />
        </FormRowVertical>
        <FormRowVertical>
          <Button size="large">Log IN</Button>
        </FormRowVertical>
        <Divider />
        <h4 className="text-2xl font-medium text-center text-blue-400 cursor-pointer " onClick={openDialog}>
          Don &apos; t have account ? Create Account
        </h4>
        {true && <AccountCreationDialog isOpen={isDialogOpen} onClose={closeDialog} />}
      </Form>
      {isLoading && <Loader />}
    </>
  );
};

export default Login;
