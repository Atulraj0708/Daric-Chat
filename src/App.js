import React from "react";
import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import Login from "./components/Login";

const App = () => {
  if (!localStorage.getItem("username")) return <Login />;

  return (
    <ChatEngine
      height="100vh"
      projectID="43220974-eb0d-4386-be0d-4aa85aa25d3f"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
