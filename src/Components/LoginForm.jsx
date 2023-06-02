import React, { useState } from "react";
import "../App.css";

const LoginForm = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
      error: "",
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = state;

    if (!email || !password) {
      setState((prevState) => ({
        ...prevState,
        error: "Please Enter a valid email and password to continue",
      }));
      return;
    }

    console.log(state);

    setState({
      email: "",
      password: "",
      error: "",
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Input your email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Input your Password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        {state.error && <p>{state.error}</p>}{" "}
        <div className="form-control">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
