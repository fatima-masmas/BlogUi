import React from "react";
import "./post.css"

export default function Post() {
  return (
    <div className="post">
      <img classNmae="postImg" src="https://picsum.photos/300" alt=""/>
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Munsic</span>
            <span className="postCat">Life</span>
           
        </div>
        <span className="postTitle">In React applications, 
        </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">In React applications, Images are 
        served from different folder locations. public folder src folder
        In React applications, Images are 
        served from different folder locations. public folder src folder
        In React applications, Images are 
        served from different folder locations. public folder src folder
        In React applications, Images are 
        served from different folder locations. public folder src folder
        In React applications, Images are 
        served from different folder locations. public folder src folder</p>
    </div>
  )
}
