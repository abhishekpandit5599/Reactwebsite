import React from 'react';
import "./Mobile.css";
import Img from "./Anonymous-Laptop-Wallpaper-4k.jpg";

export default function Mobile() {
  return (
      <>
      <div className='mobile-header'>
          <i className="placeicon fa-lg color-white fas fa-bars"></i>
          <div className='header-heading'><h2>Messages</h2></div>
      </div>
      <div className="mobile-chatting">
          <div className="mobile-chatting-header">
            <i className="placeicon fa-lg far fa-arrow-left"></i>
            <img src={Img} />
            <div>
              <h2>Esther Howard</h2>
            </div>
            <div className="icons">
              <i className="placeicon fa-lg fas fa-ellipsis-v mobile-fa-ellipsis-v"></i>
            </div>
          </div>
          <p className="mobile-chatting-day">Today</p>

          <div className="mobile-messages">
            <div className="mobile-sender">
                <div className="mobile-msg-sender">
                    <p>Hii Prakash!
                        Feels like it's been a while! How arw you? Do you
                        have any time for the remainder of the week to help me with an ongoing project?
                    </p>
                </div>
            </div>
            <div className="mobile-reciver">
                <div className="mobile-msg-reciver">
                    <p>Hii Easther, glad to hear from you, I'm fine, What about you? and how it's going with the velocity
                        website? off cours, I'll help with this project
                    </p>
                </div>
            </div>

            <div className="mobile-sender">
                <div className="mobile-msg-sender">
                    <p>Super, I'll get you the new brief for our own website over to you this evening, so you have 
                        time to read over I'm good thank you!
                    </p>
                </div>
            </div>
            <div className="mobile-reciver">
                <div className="mobile-msg-reciver">
                    <p>Of course I can, just catching up with steve on it and I'll write out. Speak tomorrow! Let me know 
                        if you have any questions!
                    </p>
                </div>
            </div>

          </div>

          <div className="mobile-message-typing-box">
            <input
              className="placeicon"
              type="text"
              placeholder="Write a message                                                                                                                           &#xf0c6;"
            />
            <i className="far fa-paper-plane fa-lg"></i>
          </div>
        </div>
      </>
  );
}
