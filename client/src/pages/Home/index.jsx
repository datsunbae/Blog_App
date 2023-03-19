import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import "./Home.scss";
import moment from "moment";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cat = location.search;
  const [posts, setPosts] = useState([]);
  const [postLatest, setPostLatest] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postLatest = await axios.get("/posts/latest");
        
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
        setPostLatest(postLatest.data);
      } catch (err) {}
    };
    fetchData();
  }, [cat]);

  return (
    <div className="home">
      {cat ? (
        <></>
      ) : (
        <div className="new-post">
          <div className="new-post__img">
          <img src={postLatest?.img} onClick={() => {navigate(`/post/${postLatest.id}`)}} alt="" />
          </div>
          <div className="post-info">
            <span classNanme="new-post__date">
              {moment(postLatest?.date).fromNow()}
            </span>
            <h1 className="new-post__title" onClick={() => {navigate(`/post/${postLatest.id}`)}}>{postLatest?.title}</h1>
            <p className="new-post__des">{postLatest?.desc}</p>
            <span className="new-post__author">{postLatest?.username}</span>
          </div>
        </div>
      )}
      <div className="post-list">
        {posts.map((post) => (
          <div className="card-post" key={post.id}>
            <div>
              <Link to={`/post/${post.id}`}>
                <img src={post.img} alt="" className="card-post__img" />
              </Link>
              <span className="card-post__date">{post.date}</span>
              <h2 className="card-post__title" onClick={() => {navigate(`/post/${post.id}`)}}>{post.title}</h2>
              <p className="card-post__des">{post.des}</p>
              <span className="card-post__author">{post.author}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
