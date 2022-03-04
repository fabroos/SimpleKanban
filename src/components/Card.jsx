import React, { useState, useEffect } from "react";
import CardInfo from "./CardInfo";
import NextSvg from "./NextSvg";
import RemoveSvg from "./RemoveSvg";

export default function Card({ id, setter, type, congrats, ...rest }) {
  function handleClick() {
    console.log(!!setter[0]);
    if (setter[0]) {
      let index = type.findIndex((card) => card.id == id);
      setter[1]((cards) => [...cards, { ...type[index] }]);
      console.log(type[index], index);
      let newArray = [...type];
      newArray.splice(index, 1);
      setter[0](newArray);
    } else {
      let index = type.findIndex((card) => card.id == id);
      let newArray = [...type];
      newArray.splice(index, 1);
      congrats(true);
      setter(newArray);
    }
  }

  return (
    <>
      <div className="card flex flex-col px-4 py-2 m-2 relative bg-white dark:bg-slate-700 rounded ">
        <CardInfo {...rest} />
        <div
          onClick={handleClick}
          className={`opacity-0 bg-gradient-to-l  to-white/5 absolute right-0 px-5 top-0 hover:opacity-80 h-full w-full transition-all cursor-pointer flex items-center justify-center ${
            setter[0] ? "from-green-300/50" : "from-yellow-300/50"
          }`}
        >
          {setter[0] ? <NextSvg /> : "🎉"}
        </div>
      </div>
    </>
  );
}
