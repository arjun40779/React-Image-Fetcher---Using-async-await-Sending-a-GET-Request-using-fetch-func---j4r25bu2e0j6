import React from "react";
import "../styles/App.css";
import { Loader } from "./Loader";
import { PhotoFrame } from "./PhotoFrame";
import { useState, useEffect } from "react";
const App = () => {
  const [photoId, setPhotoId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [photoData, setPhotoData] = useState(null);

  const fetchPhotoData = async (id) => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${id}`
      );
      const data = await response.json();
      setPhotoData(data);
    } catch (error) {
      console.error("Error fetching photo:", error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    if (photoId !== "") {
      fetchPhotoData(photoId);
    }
  }, [photoId]);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number between 1-5000"
        onChange={(e) => setPhotoId(e.target.value)}
      />
      {isLoading ? <Loader /> : null}
      {!isLoading && photoData && (
        <PhotoFrame url={photoData.url} title={photoData.title} />
      )}
    </div>
  );
};

export default App;
