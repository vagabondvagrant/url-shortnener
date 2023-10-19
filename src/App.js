import React, { useState } from "react";
import { InputUrl } from "./components/InputUrl";
import { ShortenLink } from "./components/ShortenLink";

export default function App() {
  const [given, setGiven] = useState("");
  return (
    <div className="flex items-center justify-center h-screen bg-blue-400">
      <div className="bg-blue-200 p-10 rounded shadow-md">
        <InputUrl setGiven={setGiven} />
        <ShortenLink given={given} />
      </div>
    </div>
  );
}
