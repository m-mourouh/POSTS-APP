import React from "react";
import Button from "./Button";
import AddPost from "./AddPost";
import Post from "./Post";
const Main = ({ togglePost, toggleBtn,posts , deletePost,addPost}) => {
  return (
    <main className="posts-container">
      <div className="btn1-row">
        <Button
          color={togglePost ? "#ff3f3f " : "#1cf8d0"}
          text={togglePost ? "Cancel" : "Add a post"}
          onClick={toggleBtn}
          type="button"
        />
      </div>
        {togglePost && <AddPost addPost={addPost} />}
        {posts.map(post => <Post key={post.id} postID={post.id} deletePost={deletePost} title={post.title} desc={post.body} posted={post.date} /> )}
    </main>
  );
};

export default Main;
