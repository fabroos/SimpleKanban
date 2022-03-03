import React, { useState } from "react";

export default function Form({ setter }) {
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.length < 1 && name.length < 1) {
      return setError(true);
    }
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
    setError(false);
    setTitle("");
    setName("");
    setDesc("");
  };
  const [view, setView] = useState(false);
  return (
    <>
      <button
        onClick={() => setView(!view)}
        className=" font-bold rounded-full z-20 absolute bottom-5 right-5 hover:bg-pink-500/90 bg-pink-500 w-14 h-14 text-2xl flex justify-center items-center"
      >
        +
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
          className="gap-2 flex items-center  flex-col z-10 w-full h-full bg-white px-10 py-5 dark:bg-slate-800 rounded"
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
            className="px-4 py-1 bg-pink-500 hover:bg-pink-500/90 cursor-pointer rounded"
            type="submit"
            value="Submit"
          />
          {error && (
            <p className="text-red-400 text-sm font-light">
              Task must have a correct name and title
            </p>
          )}
        </form>
      </div>
    </>
  );
}
