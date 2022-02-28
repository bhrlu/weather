import React from "react";

const Contact = ({ image = "", ContactName }) => {
  return (
    <div className="chats-page">
      <div className="flex-container flex-content-justify-space-around align-items-center flex-direction chats">
        <div className="flex-grow-1">
          <img src={image} alt={ContactName} />
        </div>
        <div className=" flex-grow-2 middle">
          <h5>{ContactName}</h5>
        </div>
      </div>
    </div>
  );
};

export default Contact;

