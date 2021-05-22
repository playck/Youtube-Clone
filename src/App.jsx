import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoList from "./components/video_list/video_list";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [name, setName] = useState("jin");

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD8crMHi75PHP6Uaq_4sejpqA5vg5qBIY0"
    )
      .then((res) => res.json())
      .then((result) => setVideos(result.items))
      .catch((err) => console.log("error", err));
  }, []);

  return (
    <div>
      <VideoList videos={videos} />
    </div>
  );
};

export default App;
