import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  return (
    <header>
      {/* Background Image */}

      {/* Title */}

      {/* Div with 2 Buttons */}

      {/* Description */}
    </header>
  );
}

export default Banner;
