import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="flex-container flex-content-justify-space-between align-items-center first-row">
        <div>Weather</div>
        <div>
          <i className="material-icons">&#xe8b6;</i>
          <i className="material-icons">&#xe5d4;</i>
        </div>
      </div>
      <div className="flex-container flex-content-justify-space-between align-items-baseline second-row">
        <div className=" flex-grow-2 chats-tab">
          <p>City</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
