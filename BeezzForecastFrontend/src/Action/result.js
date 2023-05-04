import axios from "axios";
import { Predict, MainPath } from "./api";

export const Saveprediction = async (predict) => {
  try {
    const res = await axios.post(MainPath + Predict, predict);
    return res;
  } catch (error) {
    if (error.response.status === 500) {
      alert("Server Error");
      return;
    }
    console.log(error);
  }
};
