import "../App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contacts from "./Contacts";
import Chat from "./Chat";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/weather" element={<Contacts />} />
        <Route path="contact/:name" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
