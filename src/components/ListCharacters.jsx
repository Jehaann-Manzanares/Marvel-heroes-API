import React from "react";
import "./css/ListCharacters.css";
import ImgDead from "./images/DeadPool.png";
import IconArrow from "./images/arrow.png";

class ListCharacters extends React.Component {
  render() {
    return (
      <section className="list-characters" id="listCharacters">
        <div className="list-character-container">
          <figure className="list-character-image">
            <img src={ImgDead} alt="" />
          </figure>
          <div className="list-character-texts">
            <h1 className="titles">Deadpool</h1>
            <p className="character-name">Wade Wilson</p>
            <p className="character-description">
              Is a fictional character appearing in American comic books
              published by Marvel ...
            </p>
            <div className="list-character-btnArrow">
              <p>More info</p>
              <img className="icon" src={IconArrow} alt="" onclick="modal()" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ListCharacters;
