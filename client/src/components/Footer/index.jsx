import React from 'react';
import { AiOutlineInstagram, AiFillFacebook, AiFillGithub } from "react-icons/ai";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="quotes-wrapper">
      <span className="quotes">
        "Life is like riding a bicycle. To keep your balance, you must keep moving."
      </span>
      <span className="author">
        - Albert Einstein -
      </span>
      </div>
      <div className="socials-wrapper">
        <ul className="social-list">
          <li className="social-item">
            <a 
              className="social-item__link" 
              href="https://www.facebook.com/datsunbae"
              target="_blank"
              rel="noopener noreferrer"
            >
            <AiFillFacebook className="icon"/>
            </a>
          </li>
          <li className="social-item">
            <a 
              className="social-item__link" 
              href="https://www.instagram.com/datsunbae/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <AiOutlineInstagram className="icon"/>
            </a>
          </li>
          <li className="social-item">
            <a 
              className="social-item__link" 
              href="https://github.com/datsunbae/"
              target="_blank"
              rel="noopener noreferrer"
            >
            <AiFillGithub className="icon"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer