import React from "react";

export const PhotoFrame = ({ id, title, url }) => {
  return (
    <div className="photoframe" id={`photoframe-${id}`}>
      <img src={url} />

      <div className="caption">{title}</div>
    </div>
  );
};
