import React, { useEffect, useState } from "react";
import { loginByEmail } from "../Action/user";
import { Link, useNavigate } from "react-router-dom";

import bgImg from "../assets/bees2.png";

const LoginForm = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { name, email, password } = user;
  const [confirmPassword, setConfirmPassword] = useState("");

  const [pulse, setPulse] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginByEmail(email, password);
    console.log(res);
    if (res.data) {
      // console.log(history);
      // Navigate.to("/admin");
      window.localStorage.setItem("user", res.data.id);
      alert("Login Succsessfull !");
      history("/predict");
    } else {
      alert("Please check your password");
      return;
    }
  };

  useEffect(() => {
    if (email && password && password.length >= 8) {
      setPulse(true);
    } else {
      setPulse(false);
    }
  }, [name, email, password, confirmPassword]);
  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex justify-end">
          <img
            className="w-full max-w-[400px] max-w-none mt-8"
            src={bgImg}
            alt="/"
          />
        </div>
        <div className="flex flex-col justify-center w-full px-2 py-8">
          <form
            className="bg-zinc-300
            border border-slate-300 rounded-md p-8 flex flex-col space-y-4 shadow-xl justify-center"
            onSubmit={handleSubmit}
          >
            <div className="text-center">
              <h1 className=" text-1xl md:text-4xl font-bold ">Login</h1>
            </div>
            <label htmlFor="email" className="text-lg font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="rounded-md border border-gray-400 p-2"
              required
            />
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="rounded-md border border-gray-400 p-2"
              required
            />
            <button className="py-3 px-6 bg-gray-600 text-white rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
