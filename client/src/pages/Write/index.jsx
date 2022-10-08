import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Write.scss';

const Write = () => {
  const [value, setValue] = useState();
  const [image, setImage] = useState(null);
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }
  console.log(value);
  return (
    <div className="write">
      <div className="write-row-1">
        <div className="write-title">
          <input type="text" placeholder="Enter title post ..."/>
        </div>
        <div className="write__form-content">
          <ReactQuill className="write__form-content-editor" theme="snow" value={value} onChange={setValue}/>
        </div>
        <button className="btn-post">POST</button>
      </div>
      <div className="write-row-2">
        <div className="info-post">
          <div className="info-post__privacy">
            <h4>Privacy:</h4>
            <select id="info-post__privacy-option">
              <option value="public">Public</option>
              <option value="followers">Followers</option>
              <option value="private">Private</option>
            </select>
          </div>
          <div className="info-post__thumb">
            <h4>Thumbnail:</h4>
            <input type="file" onChange={onImageChange} className="filetype" />
            <img src={image} alt=""/>
          </div>
          <div className="info-post__category">
            <h4>Category:</h4>
            <div className="info-post__category-item">
              <input name="category" id="art" value="art" type="radio"/>
              <label htmlFor="art">Art</label>
            </div>
            <div className="info-post__category-item">
              <input name="category" id="science" value="science" type="radio"/>
              <label htmlFor="science">Science</label>
            </div>
            <div className="info-post__category-item">
              <input name="category" id="teachnology" value="teachnology" type="radio"/>
              <label htmlFor="teachnology">Teachnology</label>
            </div>
            <div className="info-post__category-item">
              <input name="category" id="cinema" value="cinema" type="radio"/>
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="info-post__category-item">
              <input name="category" id="design" value="design" type="radio"/>
              <label htmlFor="design">Design</label>
            </div>
            <div className="info-post__category-item">
              <input name="category" id="food" value="food" type="radio"/>
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Write