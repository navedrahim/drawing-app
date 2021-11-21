import { useState } from "react";
import { signIn } from "../../services/users";
import { useNavigate } from "react-router-dom";
import "./SignIn.css"

const SignIn = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      navigate("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        username: "",
        password: "",
      });
    }
  };

  const { username, password } = form;

  return (
    <div className="signin-form">
      <form onSubmit={onSignIn}>
        <input
          id="signin-username"
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <input
          id="signin-password"
          required
          type="password"
          name="password"
          value={password}
          placeholder="Enter Password"
          onChange={handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
