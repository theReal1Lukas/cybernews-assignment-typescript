import React from "react";
import "./styles/App.css";
import NavigationBar from "./layout/header/NavigationBar";
import Content from "./layout/content/Content";
const App: React.FC = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Content />
    </div>
  );
};

export default App;
