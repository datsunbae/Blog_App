import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Write.scss";

const Write = () => {
  const [value, setValue] = useState();
  console.log(value)
  const [image, setImage] = useState("");
  const onImageChange = async (img) => {
    if (img.type === "image/jpeg" || img.type === "image/png") {
      const data = new FormData();
      data.append("file", img);
      data.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET);
      data.append("cloud_name", process.env.REACT_APP_CLOUD_NAME);

      try {
        const res = await axios.post(
          process.env.REACT_APP_URL_API_CLOUDINARY,
          data
        );

        setImage(res.data.url.toString());
      } catch (err) {}
    }
  };
  return (
    <div className="write">
      <div className="write-row-1">
        <div className="write-title">
          <input type="text" placeholder="Enter title post ..." />
        </div>
        <div className="write__form-content">
          <ReactQuill
            className="write__form-content-editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <button className="btn-post">POST</button>
      </div>
      <div className="write-row-2">
        <div className="info-post">
          {/* <div className="info-post__privacy">
            <h4>Privacy:</h4>
            <select id="info-post__privacy-option">
              <option value="public">Public</option>
              <option value="followers">Followers</option>
              <option value="private">Private</option>
            </select>
          </div> */}
          <div className="info-post__thumb">
            <h4>Thumbnail:</h4>
            <input
              type="file"
              onChange={(e) => onImageChange(e.target.files[0])}
              className="filetype"
            />
            <img src={image} alt="" />
          </div>
          <div className="info-post__category">
            <h4>Category:</h4>
            <div className="info-post__category-item">
              <input name="category" id="technology" value="technology" type="radio" />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="info-post__category-item">
              <input
                name="category"
                id="design"
                value="design"
                type="radio"
              />
              <label htmlFor="design">Design</label>
            </div>
            <div className="info-post__category-item">
              <input
                name="category"
                id="food"
                value="food"
                type="radio"
              />
              <label htmlFor="food">Food</label>
            </div>
            <div className="info-post__category-item">
              <input name="category" id="sports" value="sports" type="radio" />
              <label htmlFor="sports">Sports</label>
            </div>
            <div className="info-post__category-item">
              <input name="category" id="travel" value="travel" type="radio" />
              <label htmlFor="travel">Travel</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
