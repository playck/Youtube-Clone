import React from "react";
import "./video_detail.css";

const VideoDetail = ({ video, video: { snippet } }) => {
  return (
    <section className="detail">
      <iframe
        className="video"
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameborder="0"
        allowfullscreen
      />
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className="description">{snippet.description}</pre>
    </section>
  );
};

export default VideoDetail;
