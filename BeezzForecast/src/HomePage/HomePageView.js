import React from "react";
import {
  ChartSquareBarIcon,
  ChartPieIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/solid";

import bgImg from "../assets/bees.png";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col ">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Bees Colonyies & Honey Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Predicting ABsconding
          </h1>
          <p className="text-2xl">This is our Service.</p>
          <button className=" py-3 px-6 sm:w-[60%] my-4">Predict</button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>BeezzForcast Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <PresentationChartBarIcon className="h-6 text-yellow-600" />
              Statistic
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ChartSquareBarIcon className="h-6 text-yellow-600" /> Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ChartPieIcon className="h-6 text-yellow-600" /> Analysis
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <AcademicCapIcon className="h-6 text-yellow-600" />
              Research
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
