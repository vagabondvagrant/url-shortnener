import React, { useState } from "react";

export const InputUrl = ({ setGiven }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setGiven(value);
    setValue("");
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <h1 className="font-bold text-xl mb-2">React URL Shorten App</h1>
      <div className="flex items-center">
        <input
          className="border rounded p-2 flex-grow"
          type="text"
          placeholder="Paste the copied link here"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          onClick={handleClick}
        >
          Shorten
        </button>
      </div>
    </div>
  );
};
