import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Link, useLocation} from "react-router-dom";
import "./Home.scss";

const Home = () => {
  const location = useLocation();
  const cat = location.search;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [cat]);
  
  return (
    <div className="home">
      {cat ? <></> : <div className="new-post">
        <div className="new-post__img">
          <img
            src="https://cdn.dribbble.com/userupload/2936601/file/original-2b2ba50bd8504aa031fedbf750bf3f70.jpg?compress=1&resize=1024x783"
            alt=""
          />
        </div>
        <div className="post-info">
          <span classNanme="new-post__date">November 25, 2022</span>
          <h1 className="new-post__title">
            NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN
          </h1>
          <p className="new-post__des">
            Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub
            rồi đúng không nhỉ?
          </p>
          <span className="new-post__author">Datsunbae</span>
        </div>
      </div>}
      <div className="post-list">
        {posts.map((post) => (
          <div className="card-post" key={post.id}>
            <div>
              <Link to={`/post/${post.id}`}><img src={post.img} alt="" className="card-post__img" /></Link>
              <span className="card-post__date">{post.date}</span>
              <h2 className="card-post__title">{post.title}</h2>
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
