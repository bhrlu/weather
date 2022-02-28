import React from "react";

import Header from "./Header";
import Contact from "./Contact";
import img from "../assets/logo512.png";
import { useNavigate } from "react-router-dom";

const contacts = [
  { ContactName: "tehran", image: img },
  { ContactName: "london", image: img },
  { ContactName: "mashhad", image: img },
  { ContactName: "new york", image: img },
];

const Contacts = () => {
  let navigate = useNavigate();
  const handleChat = (city) => {
    navigate(`contact/${city}`);
  };
  return (
    <>
      <Header />
      {contacts.map((contact) => (
        <div
          className="contact-select"
          onClick={() => handleChat(contact.ContactName)}
          key={contact.ContactName}
        >
          <Contact ContactName={contact.ContactName} image={contact.image} />
        </div>
      ))}
    </>
  );
};

export default Contacts;
