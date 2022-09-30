import React from 'react';
import "./Home.scss";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    },
    {
      id: 2,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    },
    {
      id: 3,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    },{
      id: 4,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    }
    ,{
      id: 5,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    }
    ,{
      id: 6,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    }
    ,{
      id: 7,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    }
    ,{
      id: 8,
      title: "HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png"
    }
  ]
  return (
    <div className="home">
    <div className="new-post">
      <div className="new-post__img">
        <img src="https://d1iv5z3ivlqga1.cloudfront.net/wp-content/uploads/2021/11/25171539/cach-push-code-len-git-1.png" alt=""/>
      </div>
      <div className="post-info">
        <span classNanme="new-post__date">November 25, 2022</span>
        <h1 className="new-post__title">HƯỚNG DẪN CHI TIẾT CÁCH PUSH CODE LÊN GIT</h1>
        <p className="new-post__des">Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?</p>
        <span className="new-post__author">Datsunbae</span>
      </div>
    </div>
    <div className="post-list">
    {posts.map((post) => (
        <div className="card-post" key={post.id}>
          <div>
            <img src={post.img} alt="" className="card-post__img"/>
            <span className="card-post__date">{post.date}</span>
            <h2 className="card-post__title">{post.title}</h2>
            <p className="card-post__des">{post.des}</p>
            <span className="card-post__author">
            {post.author}
            </span>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Home