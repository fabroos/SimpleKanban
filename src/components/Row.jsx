import React from "react";

import Card from "./Card";

export default function Row({ children, cards = [], setter, type, congrats }) {
  return (
    <div className="row flex flex-col h-full">
      <h3 className="border-b dark:border-gray-800 mb-4 px-3 font-bold dark:text-white">
        {children}
      </h3>
      {cards.map((card, i) => (
        <Card
          congrats={congrats}
          key={i}
          {...card}
          setter={setter}
          type={type}
        />
      ))}
    </div>
  );
}
