import React, { useCallback, useEffect, useState } from "react";
import VideoList from "./components/video_list/video_list";
import SearchHeader from "./components/search_header/search_header";
import VideoDetail from "./components/video_detail/video_detail";
import "./App.css";

const App = ({ youtube }) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = useCallback(
    (query) => {
      youtube
        .search(query) //
        .then((vidoes) => setVideos(vidoes));
      setSelectedVideo(null);
    },
    [youtube]
  );

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((vidoes) => setVideos(vidoes));
  }, [youtube]);

  return (
    <div className="app">
      <SearchHeader onSearch={search} />
      <section className="content">
        {selectedVideo && (
          <div className="detail">{<VideoDetail video={selectedVideo} />}</div>
        )}
        <div className="list">
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </div>
      </section>
    </div>
  );
};

export default App;
