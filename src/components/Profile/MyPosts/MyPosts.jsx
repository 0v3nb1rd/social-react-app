import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElement = props.postData.map((post) => (
    <Post number={post.id} message={post.message} key={post.id} />
  ));

  return (
    <section className={s.myPosts}>
      <div className={s.addPost}>
        <textarea className={s.textArea} name="texts" id="" rows="5"></textarea>
        <button className={s.btn} type="submit">
          submit
        </button>
      </div>
      <ul className={s.postList}>{postElement}</ul>
    </section>
  );
};

export default MyPosts;
