import React from "react";
import "./video_item.css";

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className="container">
      <div className="video">
        <img
          className="thumbnails"
          src={snippet.thumbnails.medium.url}
          alt="video thumbnails"
        />
        <div className="metadata">
          <p className="title">{snippet.title}</p>
          <p className="channel">{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
