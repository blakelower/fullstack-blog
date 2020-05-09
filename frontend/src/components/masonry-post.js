import React from "react";
import {categoryColors} from "./styles";

function MasonryPost({ post, tagsOnTop }) {

  return (
    <a className="masonry-post overlay" href={post.link}> 
      <div className="image-text">
        <div className="tags-container">
          {post.categories.map((tag, ind) => 
            <span
              key={ind}
              className="tag"
              style={{ backgroundColor: categoryColors[tag]}}>
              {tag.toUpperCase()}
            </span>
          )}
        </div>
        <h2 className="image-title">{post.title}</h2>
        <span className="image-date">{post.date}</span>
        <img src = {post.image} alt="bork"/>
      </div>
    </a>
  );
}
export default MasonryPost;
