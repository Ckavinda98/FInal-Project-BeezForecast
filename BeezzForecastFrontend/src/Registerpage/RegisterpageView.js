import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRegister } from "../Action/user";
import bgImg from "../assets/bees2.png";

const RegForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
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

    if (password === confirmPassword) {
      if (name && email && password) {
        const res = await userRegister(user);
        if (res.data) {
          window.localStorage.setItem("user", res.data.id);
          alert("Sing Up Succsessfull !");
          navigate("/");
        }
      } else {
        alert("All fields needs to fill");
        return;
      }
    }
  };

  useEffect(() => {
    if (
      name &&
      email &&
      password &&
      confirmPassword &&
      confirmPassword === password
    ) {
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
            className="w-full max-w-[400px] max-w-none mt-12"
            src={bgImg}
            alt="/"
          />
        </div>
        <div className="flex flex-col justify-center w-full px-2 py-8 mt-12">
          <form
            className="bg-zinc-300 border border-slate-300 rounded-md p-8 flex flex-col space-y-4 shadow-xl justify-center"
            onSubmit={handleSubmit}
          >
            <div className="text-center">
              <h1 className="text-1xl md:text-4xl font-bold ">Register</h1>
            </div>
            <label htmlFor="name" className="text-base font-medium">
              Username
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="rounded-md border border-gray-400 p-1"
              required
            />
            <label htmlFor="email" className="text-base font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="rounded-md border border-gray-400 p-1"
              required
            />
            <label htmlFor="password" className="text-base font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="rounded-md border border-gray-400 p-1"
              required
            />
            <label htmlFor="password" className="text-base font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="rounded-md border border-gray-400 p-1"
              required
            />
            <div className="relative"></div>
            <button className="py-2 px-6 bg-gray-600 text-white rounded-md text-base">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegForm;
