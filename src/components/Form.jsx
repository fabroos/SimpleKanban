import React, { useState } from "react";

export default function Form({ setter }) {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setter((tasks) => [
      ...tasks,
      {
        name,
        description: desc,
        title,
        category: "Work",
        id: crypto.randomUUID(),
      },
    ]);
    setTitle("");
    setName("");
    setDesc("");
  };
  const [view, setView] = useState(false);
  return (
    <>
      <button
        onClick={() => setView(!view)}
        className=" px-2 py-0.5 font-bold rounded hover:bg-yellow-300 bg-yellow-100 max-w-fit"
      >
        Open Form
      </button>
      <div
        className={`absolute top-0 left-0 w-screen h-screen grid place-content-center bg-black/50 ${
          view ? "" : "hidden"
        }`}
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="gap-2 relative flex items-center  flex-col z-10 bg-white px-10 py-5 dark:bg-slate-800 rounded"
        >
          <button
            className="absolute top-2 right-2 dark:text-white cursor-pointer"
            onClick={() => setView(!view)}
          >
            X
          </button>
          <label className="dark:text-gray-300">Title</label>
          <input
            className="border bg-white p-1 rounded"
            name="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <label className="dark:text-gray-300">description</label>
          <input
            className="border bg-white p-1 rounded"
            name="description"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
            type="text"
          />
          <label className="dark:text-gray-300">Name</label>
          <input
            className="border bg-white p-1 rounded"
            name="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
            value={name}
          />
          <input
            className="px-4 py-1 bg-yellow-200 rounded"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </>
  );
}
