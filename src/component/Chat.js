import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useNavigate, useParams } from "react-router-dom";
import { FetchWeather } from "../api/fetchApiWeather";

import img from "../assets/logo512.png";

const Chat = () => {
  const [state, setState] = useState([]);
  const { name } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetch = async () => {
      const data = await FetchWeather(name);
      setState(data);
    };
    fetch();
  }, [name]);

  return (
    <div>
      <div className="user-bar align-items-center flex-container">
        <img
          className="back"
          onClick={handleBack}
          src="https://img.icons8.com/material/24/000000/back--v1.png"
          alt="back"
        />
        <div className="avatar">
          <img src={img} alt="Avatar" />
        </div>
        <div className="name">
          <span>{name}</span>
        </div>
      </div>
      <div className="conversation flex-container flex-direction-column align-items-flex-end">
        {state &&
          state.map((item) => (
            <Message
              key={item.date}
              date={item.date}
              maxTemp={item.day.maxtemp_c}
              minTemp={item.day.mintemp_c}
              avgTemp={item.day.avgtemp_c}
            />
          ))}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="conversation-compose flex-container flex-direction align-items-flex-end"
        >
          <input
            className="input-msg flex-grow-1"
            name="input"
            placeholder="Type a message..."
          />
          <div className="photo flex-container align-items-center">
            <img
              src="https://img.icons8.com/material/24/000000/attach--v2.png"
              alt="attach"
            />
            <img
              src="https://img.icons8.com/material/24/000000/camera--v1.png"
              alt="camera"
            />
          </div>
          <button className="send">
            <div className="circle flex-container align-items-center flex-content-justify-center">
              <img
                src="https://img.icons8.com/material/24/000000/filled-sent.png"
                alt="send"
              />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
