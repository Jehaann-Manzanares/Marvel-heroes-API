import React from "react";
import "./css/home.css";
import "./css/animations.css";
import Header from "./Header";
import ListCharacters from "./ListCharacters";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <ListCharacters />
    </React.Fragment>
  );
}

export default Home;
