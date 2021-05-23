import React, { memo } from "react";
import "./video_item.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? "list" : "grid";

    return (
      <li
        className={`container ${displayType}`}
        onClick={() => onVideoClick(video)}
      >
        <div className="video">
          <img
            className="thumbnail"
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
  }
);

export default VideoItem;
