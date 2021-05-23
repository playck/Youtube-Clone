import React from "react";
import VideoItem from "../video_item/video_item";
import "./video_list.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <ul className="videos">
      {videos.map((video) => (
        <VideoItem
          key={video.id}
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
