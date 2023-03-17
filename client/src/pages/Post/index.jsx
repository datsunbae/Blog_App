import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import "./Post.scss";
import RecommendPost from "../../components/RecommendPost";

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
      <RecommendPost cat={post?.cat} postID={post?.id}/>
    </div>
  );
};

export default Post;
