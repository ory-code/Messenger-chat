import "./App.css";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Message from "./Message";
import { useEffect } from "react";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { username: "julien", message: "le test" },
    { username: "jo", message: "le taxi" },
    { username: "esteban", message: "espagne" },
  ]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(prompt("enter your Name..."));
  
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: userName, message: input }]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World 🐊 </h1>
      <h2>Hey {userName} </h2>

      {messages.map((message, key) => (
        <Message message={message} key={key} username={userName} />
      ))}

      <FormControl>
        <InputLabel htmlFor="my-input">New Message</InputLabel>
        <Input
          id="my-input"
          aria-describedby="my-helper-text"
          className="input"
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <Button
          onClick={sendMessage}
          disabled={!input}
          variant="contained"
          type="submit"
          className="btn"
        >
          Send Message
        </Button>
      </FormControl>
    </div>
  );
}

export default App;
