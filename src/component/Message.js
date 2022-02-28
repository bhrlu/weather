import React from "react";

const Message = ({ date, maxTemp, minTemp, avgTemp }) => {
  return (
    <div className=" message sent">
      <p>در تاریخ : {date}</p>
      <p>بیشترین دما : {maxTemp}</p>
      <p>کم ترین دما : {minTemp}</p>
      <p>میانگین دما : {avgTemp}</p>
    </div>
  );
};

export default Message;
