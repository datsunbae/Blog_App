import React from 'react';
import "./Home.scss";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/2817657/file/original-4c249c180db831f9bcc24f4bf01ee5b7.jpg?compress=1&resize=1024x1024"
    },
    {
      id: 2,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/3678806/file/original-f5423389f689010ae6a6d1a08ef67983.png?compress=1&resize=1024x768"
    },
    {
      id: 3,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/3368405/file/original-6bb6ea3370a5e1510940331d3175db67.png?compress=1&resize=1024x768"
    },{
      id: 4,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/3267051/file/original-d63714084aae10607eb5322147062199.png?compress=1&resize=1024x768"
    }
    ,{
      id: 5,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/3247623/file/original-666afac47856a95f3309d049e66d4677.jpg?compress=1&resize=1024x768"
    }
    ,{
      id: 6,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/3186874/file/original-7372b05f3c9aef47a25b9fc805fe190d.png?compress=1&resize=1024x768"
    }
    ,{
      id: 7,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/3106115/file/original-7ca08e77778233b2748808042d31e187.png?compress=1&resize=1024x768"
    }
    ,{
      id: 8,
      title: "NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN",
      des: "Có lẽ các bạn theo đuổi lĩnh vực IT đã quen thuộc với Git và GitHub rồi đúng không nhỉ?",
      author: "Datsunbae",
      date: "November 25, 2022",
      img: "https://cdn.dribbble.com/userupload/2936601/file/original-2b2ba50bd8504aa031fedbf750bf3f70.jpg?compress=1&resize=1024x783"
    }
  ]
  return (
    <div className="home">
    <div className="new-post">
      <div className="new-post__img">
        <img src="https://cdn.dribbble.com/userupload/2936601/file/original-2b2ba50bd8504aa031fedbf750bf3f70.jpg?compress=1&resize=1024x783" alt=""/>
      </div>
      <div className="post-info">
        <span classNanme="new-post__date">November 25, 2022</span>
        <h1 className="new-post__title">NORTH KOREA FIRES BALLISTIC MISSILE OVER JAPAN</h1>
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