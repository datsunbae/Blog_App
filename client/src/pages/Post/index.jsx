import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "./Post.scss";

const Post = () => {
  const [post, setPost] = useState();
  const location = useLocation();
  const postID = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/posts/${postID}`);
      setPost(res.data);
    };
    fetchData();
  }, []);


  return (
    <div className="post-page">
      <div className="post-detail">
        <div className="post-detail__img">
          <img
            src={post?.img}
            alt=""
          />
        </div>
        <div className="post-detail__content">
          <div className="post-detail__author-wrapper">
            <img
              src={post?.userImg}
              alt=""
            />
            <div className="post-detail__author">
              <h4 className="post-detail__author-name">{post?.username}</h4>
              <span className="post-detail__author-date">
                {moment(post?.date).fromNow()}
              </span>
            </div>
          </div>
          <h1 className="post-detail__title">
            {post?.title}
          </h1>
          <p className="post-detail__content-post">
            {post?.content}
          </p>
        </div>
      </div>
      <div className="other-post">
        <div className="other-post__title">Other posts you may like</div>
        <ul className="other-post__list">
          <li className="other-post__item">
            <img
              src="https://cdn.dribbble.com/users/3562886/screenshots/14761289/media/7ef51c4dec10d815ea68c3c95f2b88c8.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <h3 className="other-post__item-title">
              NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN
            </h3>
            <button className="other-post__btn">Read More</button>
          </li>
          <li className="other-post__item">
            <img
              src="https://cdn.dribbble.com/users/3562886/screenshots/14761289/media/7ef51c4dec10d815ea68c3c95f2b88c8.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <h3 className="other-post__item-title">
              NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN
            </h3>
            <button className="other-post__btn">Read More</button>
          </li>
          <li className="other-post__item">
            <img
              src="https://cdn.dribbble.com/users/3562886/screenshots/14761289/media/7ef51c4dec10d815ea68c3c95f2b88c8.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <h3 className="other-post__item-title">
              NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN
            </h3>
            <button className="other-post__btn">Read More</button>
          </li>
          <li className="other-post__item">
            <img
              src="https://cdn.dribbble.com/users/3562886/screenshots/14761289/media/7ef51c4dec10d815ea68c3c95f2b88c8.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <h3 className="other-post__item-title">
              NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN
            </h3>
            <button className="other-post__btn">Read More</button>
          </li>
          <li className="other-post__item">
            <img
              src="https://cdn.dribbble.com/users/3562886/screenshots/14761289/media/7ef51c4dec10d815ea68c3c95f2b88c8.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <h3 className="other-post__item-title">
              NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN
            </h3>
            <button className="other-post__btn">Read More</button>
          </li>
          <li className="other-post__item">
            <img
              src="https://cdn.dribbble.com/users/3562886/screenshots/14761289/media/7ef51c4dec10d815ea68c3c95f2b88c8.png?compress=1&resize=1000x750&vertical=top"
              alt=""
            />
            <h3 className="other-post__item-title">
              NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN
            </h3>
            <button className="other-post__btn">Read More</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
