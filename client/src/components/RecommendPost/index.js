import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RecommendPost.scss';

const RecommendPost = ({cat, postID}) => {
  const [recommendPost, setRecommendPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/posts?cat=${cat}`);
      const posts = res.data.filter(post => post.id !== postID);
      setRecommendPost(posts);
    }

    fetchData();
  }, [cat]);
  

    return <div className="other-post">
    <div className="other-post__title">Other posts you may like</div>
    <ul className="other-post__list">
      {recommendPost.map((post) => (
        <li className="other-post__item">
        <img
          src={post.img}
          alt=""
        />
        <h3 className="other-post__item-title">
          {post.title}
        </h3>
        <button className="other-post__btn">
          <Link to={`/post/${post.id}`} >Read More</Link>
        </button>
      </li>
      ))}
      
    </ul>
  </div>;
}

export default RecommendPost;