import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from "axios";

export const ShortenLink = ({ given }) => {
  const [shortenUrl, setShortenUrl] = useState("");
  const [copy, setCopy] = useState(false);

  const copyLink = () => {
    if (shortenUrl.trim() !== "") {
      setCopy(true);
    }
  };

  const fetchUrl = async (inputValue) => {
    try {
      const response = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenUrl(response.data.result.full_short_link);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (given) {
      fetchUrl(given);
    }
  }, [given]);

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{shortenUrl}</h2>
      <CopyToClipboard text={shortenUrl} onCopy={() => setCopy(true)}>
        <button
          className={`bg-blue-500 text-white py-2 px-4 rounded ${
            copy ? "bg-green-500" : "hover:bg-blue-600"
          } transition duration-300`}
          onClick={copyLink}
        >
          {copy ? "Copied!" : "Copy link"}
        </button>
      </CopyToClipboard>
    </div>
  );
};
