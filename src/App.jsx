import React, { useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import "./App.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    youtube
      .search(query) //
      .then((vidoes) => setVideos(vidoes));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((vidoes) => setVideos(vidoes));
  }, []);

  return (
    <div className="app">
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
