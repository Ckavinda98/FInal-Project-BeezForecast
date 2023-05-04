import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Model = ({ onClose, result }) => {
  //   console.log(result);
  //   const [status, setStatus] = useState();
  //   useEffect(() => {
  //     if ((result * 100 >= 0 && result * 100 < 15) || result * 100 < 0) {
  //       setStatus(0);
  //     } else if (result * 100 >= 15 && result * 100 < 40) {
  //       setStatus(1);
  //     } else if (result * 100 >= 40 && result * 100 < 65) {
  //       setStatus(2);
  //     } else if (result * 100 >= 65) {
  //       setStatus(3);
  //     }
  //   }, [result]);
  const handleBackgroundClick = (event) => {
    if (event.target.classList.contains("bg-black")) {
      onClose();
    }
  };
  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xl flex items-center justify-center transition-opacity duration-1000 ani"
    >
      <div className="bg-zinc-200 flex flex-col items-center p-4 md:p-8 rounded-xl opacity-100 transition-opacity duration-1000 ease-in-out">
        <div>
          <h1 className="text-2xl font-serif text-white">Predict results</h1>
        </div>
        <div>
          <h1 className="text-orange-600 text-xl font-bold font-serif mt-4">
            {Number((result * 100).toFixed(2))} %
          </h1>
        </div>

        <div>
          <h1
            onClick={onClose}
            className="text-white text-xs  font-serif mt-8 cursor-pointer"
          >
            Close
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Model;
