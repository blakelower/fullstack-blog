import React from "react";
import {categoryColors} from "./styles";

function MasonryPost({ post, tagsOnTop }) {
// const style = {backgroundImage: `url("${require(`../assets/images/${post.image}`)}")`};  //style={style}
  return (
    <a className="masonry-post overlay"  href={post.link}> 
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
      </div>
    </a>
  );
}
export default MasonryPost;
