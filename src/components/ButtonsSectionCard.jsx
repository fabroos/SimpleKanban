import React from "react";
import ButtonCard from "./ButtonCard";
import NextSvg from "./NextSvg";
import PrevSvg from "./PrevSvg";

export default function ButtonsSectionCard() {
  return (
    <div className="">
      <ButtonCard svg={<PrevSvg />} />
      <ButtonCard svg={<NextSvg />} />
    </div>
  );
}
