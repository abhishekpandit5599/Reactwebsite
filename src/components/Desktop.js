import React from "react";
import "./Desktop.css";
import Img from "./Anonymous-Laptop-Wallpaper-4k.jpg";

export default function Desktop() {
    const attechmentFunction = () =>{

    }
    
  return (
    <div className="conatiner">
      <div className="left-navbar">
        <div className="dasbord">
          <i className="placeicon color-white fa-2x fas fa-qrcode"></i>
        </div>
        <div className="navbar-icons">
          <i className="placeicon color-white fa-2x fal fa-home"></i>
        </div>
        <div className="navbar-icons">
          <i className="placeicon color-white fa-2x fal fa-comment-dots"></i>
        </div>
        <div className="navbar-icons">
          <i className="placeicon color-white fa-2x far fa-cog"></i>
        </div>
        <div className="navbar-logout">
            <i className="placeicon color-white fa-2x fal fa-sign-out"></i>
        </div>
      </div>

      <div className="right-container">
        <div className="header">
          <div className="sub-header-left">
            <h2>Chat</h2>
            <div className="sort-icon">
              <p className="sort-icon">Sort</p>
              <i className="sort-icon placeicon fa-lg far fa-sliders-h"></i>
            </div>
          </div>
          <div className="sub-header-right-main sub-header-right">
            <i className="sub-header-right placeicon fas fa-chevron-down"></i>
            <p className="sub-header-right">Prakash</p>
            <img className="sub-header-right" src={Img}></img>
            <i className="sub-header-right placeicon fa-lg far fa-bell"></i>
          </div>
        </div>

        <div className="chat-details">
          <div className="search-box">
            <input
              type="text"
              className="placeicon"
              placeholder=" &#xf002; Search"
            />
          </div>
          <div className="chat-person-details">
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Esther Howard</h2>
                <p>Of course I can...</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Marvin McKinney</h2>
                <p>That's great!!</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Kathryn Murphy</h2>
                <p>Counting yor slot...</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Floyd Miles</h2>
                <p>Let me know...</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Albert Flores</h2>
                <p>All faith needs feet...</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Brooklyn Simmons</h2>
                <p>Glad to hear from you...</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Kristin Wastson</h2>
                <p>Ester Howard</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Annette Black</h2>
                <p>Ester Howard</p>
              </div>
            </div>
            <div className="person-individual">
              <img src={Img} />
              <div>
                <h2>Savannah Nguyen</h2>
                <p>Ester Howard</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chatting">
          <div className="chatting-header">
            <img src={Img} />
            <div>
              <h2>Esther Howard</h2>
            </div>
            <div className="icons">
              <i className="placeicon fa-lg fas fa-ellipsis-v"></i>
              <i className="placeicon fa-lg far fa-times"></i>
            </div>
          </div>
          <p className="chatting-day">Today</p>

          <div className="messages">
            <div className="sender">
                <img src={Img}/>
                <div className="msg-sender">
                    <p>Hii Prakash!
                        Feels like it's been a while! How arw you? Do you
                        have any time for the remainder of the week to help me with an ongoing project?
                    </p>
                </div>
            </div>
            <div className="reciver">
                <div className="msg-reciver">
                    <p>Hii Easther, glad to hear from you, I'm fine, What about you? and how it's going with the velocity
                        website? off cours, I'll help with this project
                    </p>
                </div>
                <img src={Img}/>
            </div>

            <div className="sender">
                <img src={Img}/>
                <div className="msg-sender">
                    <p>Super, I'll get you the new brief for our own website over to you this evening, so you have 
                        time to read over I'm good thank you!
                    </p>
                </div>
            </div>
            <div className="reciver">
                <div className="msg-reciver">
                    <p>Of course I can, just catching up with steve on it and I'll write out. Speak tomorrow! Let me know 
                        if you have any questions!
                    </p>
                </div>
                <img src={Img}/>
            </div>

          </div>

          <div className="message-typing-box">
            <input
              onClick={attechmentFunction}
              className="placeicon"
              type="text"
              placeholder="Write a message                                                                                                                           &#xf0c6;"
            />
            <i className="far fa-paper-plane fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
