import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PredictForm = ({ onClose, result }) => {
  const [states, setStates] = useState("");
  const [varroam, setVarroam] = useState("");
  const [parasites, setParasites] = useState("");
  const [diseases, setDiseases] = useState("");
  const [queen, setQueen] = useState("");
  const [weather, setWeather] = useState("");
  const [pesticides, setPesticides] = useState("");
  console.log(states, varroam, parasites, diseases, queen, weather, pesticides);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    const data = {
      a: states,
      b: varroam,
      c: parasites,
      d: diseases,
      e: queen,
      f: weather,
      g: pesticides,
    };
    const response = await axios.post("http://localhost:8080/predict", data);
    console.log(response);
  };
  return (
    <div id="home" className="w-full h-screen bg-zinc-200 flex flex-col">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex justify-end m-auto">
          <div className="  w-full px-2 py-1">
            <form
              className="bg-zinc-300
            border border-slate-300 rounded-md p-8 flex flex-col space-y-4 shadow-xl "
              onSubmit={handleSubmit}
            >
              <div className="text-center">
                <h1 className=" text-1xl md:text-4xl font-bold ">Notice !</h1>
              </div>
              <label htmlFor="email" className="text-sm font-medium">
                State: Please enter the name of the state where your beehives
                are located.
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Varroa mites Loss: Please enter the percentage of bee colony
                loss due to Varroa mites infestation.
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Please enter the percentage of bee colony loss from pests and
                parasites, such as wax moths, small hive beetles, and non-Varroa
                mites.
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Diseases Loss: Please enter the percentage of bee colony loss
                due to diseases such as foulbrood, nosema, and chalkbrood.
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Pesticides Loss: Please enter the percentage of bee colony loss
                due to exposure to pesticides.
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Weather Loss: Please enter the percentage of bee colony loss due
                to extreme weather conditions such as floods, droughts, and
                hurricanes.
              </label>
              <label htmlFor="email" className="text-sm font-medium">
                Queen Failure Loss: Please enter the percentage of bee colony
                loss due to queen failure, which can result from poor genetics,
                disease, or age.
              </label>
            </form>
          </div>
        </div>
        <div className="ml-2 px-2 py-6 mt-4">
          <form className="bg-zinc-300 border border-slate-300 rounded-md p-6 flex flex-col space-y-4 shadow-xl justify-center">
            <div className="text-center">
              <h1 className="text-1xl md:text-4xl font-bold ">Predict</h1>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <label htmlFor="state" className="text-base font-medium">
                  Please Select the State :
                </label>
                <select
                  id="state"
                  name="state"
                  className="rounded-md border border-gray-400 p-1 pl-4 pr-2 appearance-none ml-3"
                  required
                  onChange={(e) => setStates(e.target.value)}
                >
                  <option value="">Select a state</option>
                  <option value="1">Alabama</option>
                  <option value="2">Arizona</option>
                  <option value="3">Arkansas</option>
                  <option value="4">California</option>
                  <option value="5">Colorado</option>
                  <option value="6">Connecticut</option>
                  <option value="7">Florida</option>
                  <option value="8">Georgia</option>
                  <option value="9">Hawaii</option>
                  <option value="10">Idaho</option>
                  <option value="11">Illinois</option>
                  <option value="12">Indiana</option>
                  <option value="13">Iowa</option>
                  <option value="14">Kansas</option>
                  <option value="15">Kentucky</option>
                  <option value="16">Louisiana</option>
                  <option value="17">Maine</option>
                  <option value="18">Maryland</option>
                  <option value="19">Massachusetts</option>
                  <option value="20">Michigan</option>
                  <option value="21">Minnesota</option>
                  <option value="22">Mississippi</option>
                  <option value="23">Missouri</option>
                  <option value="24">Montana</option>
                  <option value="25">Nebraska</option>
                  <option value="26">New Jersey</option>
                  <option value="27">New Mexico</option>
                  <option value="28">New York</option>
                  <option value="29">North Carolina</option>
                  <option value="30">North Dakota</option>
                  <option value="31">Ohio</option>
                  <option value="32">Oklahoma</option>
                  <option value="33">Oregon</option>
                  <option value="34">Pennsylvania</option>
                  <option value="35">South Carolina</option>
                  <option value="36">South Dakota</option>
                  <option value="37">Tennessee</option>
                  <option value="38">Texas</option>
                  <option value="39">Utah</option>
                  <option value="40">Vermont</option>
                  <option value="41">Virginia</option>
                  <option value="42">Washington</option>
                  <option value="43">West Virginia</option>
                  <option value="44">Wisconsin</option>
                  <option value="45">Wyoming</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="state" className="text-base font-medium">
                  Did Varroa mites affect the colony ?
                </label>
                <select
                  id="state"
                  name="state"
                  className="rounded-md border border-gray-400 p-1 pl-4 pr-2 appearance-none ml-3"
                  required
                  onChange={(e) => setVarroam(e.target.value)}
                >
                  <option value="">Yes / No</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="state" className="text-base font-medium">
                  Did pests or parasites affect the colony ?
                </label>
                <select
                  id="state"
                  name="state"
                  className="rounded-md border border-gray-400 p-1 pl-4 pr-2 appearance-none ml-3"
                  required
                  onChange={(e) => setParasites(e.target.value)}
                >
                  <option value="">Yes / No</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative">
                <label htmlFor="state" className="text-base font-medium">
                  Did diseases affect the colony ?
                </label>
                <select
                  id="state"
                  name="state"
                  className="rounded-md border border-gray-400 p-1 pl-4 pr-2 appearance-none ml-3"
                  required
                  onChange={(e) => setDiseases(e.target.value)}
                >
                  <option value="">Yes / No</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="state" className="text-base font-medium">
                  Did weak queen affect colony ?
                </label>
                <select
                  id="state"
                  name="state"
                  className="rounded-md border border-gray-400 p-1 pl-4 pr-2 appearance-none ml-3 items-end justify-end"
                  required
                  onChange={(e) => setQueen(e.target.value)}
                >
                  <option value="">Yes / No</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                  </svg>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="state" className="text-base font-medium">
                  Did colony have exposure to the bad weather ?
                </label>
                <select
                  id="state"
                  name="state"
                  className="rounded-md border border-gray-400 p-1 pl-4 pr-2 appearance-none ml-3"
                  required
                  onChange={(e) => setWeather(e.target.value)}
                >
                  <option value="">Yes / No</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <label htmlFor="state" className="text-base font-medium">
                  Did you use the pesticides ?
                </label>
                <select
                  id="state"
                  name="state"
                  className="rounded-md border border-gray-400 p-1 pl-4 pr-2 appearance-none ml-3"
                  required
                  onChange={(e) => setPesticides(e.target.value)}
                >
                  <option value="">Yes / No</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-2 flex items-center">
                  <svg
                    className="h-4 w-4 fill-current text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
                  </svg>
                </div>
              </div>
            </div>
            <button className="py-1 px-6 bg-gray-600 text-white rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PredictForm;
