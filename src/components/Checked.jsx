import React from "react";
import Lottie from "lottie-react";
import AnimationData from "../assets/checkmark.json";
export default function Checked() {
  return (
    <Lottie
      animationData={AnimationData}
      className="text-pink-500 first:stroke-pink-500 first:fill-pink-500 fill-current stroke-current"
    ></Lottie>
  );
}
