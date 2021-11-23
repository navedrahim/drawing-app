import { signUp } from "../../services/users";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./SignUp.css";

const SignUp = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const onSignUp = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signUp(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        email: "",
        password: "",
        passwordConfirm: "",
        isError: true,
        errorMsg: "Details Invalid",
      });
    }
  };

  const { email, username, password, passwordConfirm } = form;

  return (
    <Layout user={props.user}>
      <div className="signup-form">
        <form onSubmit={onSignUp}>
          <input
            required
            type="text"
            name="email"
            value={email}
            placeholder="E-mail"
            onChange={handleChange}
          />
          <input
            required
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            required
            type="password"
            name="passwordConfirm"
            value={passwordConfirm}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
