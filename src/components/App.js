import React, { useState } from "react";

import "../styles/App.css";

import { Loader } from "./Loader";

import { PhotoFrame } from "./PhotoFrame";

const App = () => {
  const [id, setId] = useState();

  const [loading, setLoading] = useState(false);

  const [imgData, setImgData] = useState();

  const handleNumberChange = (e) => {
    const number = e.target.value;

    async function fetchData(id) {
      try {
        setLoading(true);

        const rawData = await fetch(
          `https://jsonplaceholder.typicode.com/photos/${id}`
        );

        const data = await rawData.json();

        setImgData(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    }

    setId(number);

    fetchData(number);
  };

  return (
    <div id="main">
      Id number&nbsp;
      <input type={"number"} value={id} onChange={handleNumberChange} />
      {loading ? (
        <Loader />
      ) : !loading && imgData && id !== 0 ? (
        <PhotoFrame id={imgData.id} url={imgData.url} title={imgData.title} />
      ) : null}
    </div>
  );
};

export default App;
