import React from "react";

export default function CardInfo({ title, description, category, name }) {
  return (
    <>
      <section className="flex justify-between items-center ">
        <span className="text-lg dark:text-white">{title}</span>
        <span className="bg-red-400 px-2 text-sm py-0.5 rounded font-bold text-white">
          {category}
        </span>
      </section>
      <div className="">
        <p className="text-sm text-gray-500 dark:text-gray-200 max-w-prose">
          {description}
        </p>
      </div>
      <span className="text-xs my-1 text-gray-400">{name}</span>
    </>
  );
}
