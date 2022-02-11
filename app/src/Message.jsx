import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import "./message.css"

import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Message = ({message, username}) => {
    const isUser = username === message.username;
  return (
    <div className={`message ${isUser && "message__user"} `}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"} >
        <CardHeader title={message.username} />
        <CardContent>
          <Typography variant="p" fontSize="20px" component="p">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Message;
