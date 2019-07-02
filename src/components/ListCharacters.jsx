import React from "react";
import "./css/ListCharacters.css";
import ImgDead from "./images/DeadPool.png";
import IconArrow from "./images/arrow.png";
import ModalCharacters from "./ModalCharacter";

class ListCharacters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false
    };
  }

  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <React.Fragment>
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
                <img
                  className="icon"
                  src={IconArrow}
                  alt=""
                  onClick={this.handleOpenModal}
                />
              </div>
            </div>
          </div>
        </section>
        <ModalCharacters
          modalIsOpen={this.state.modalIsOpen}
          onOpenModal={this.handleOpenModal}
          onCloseModal={this.handleCloseModal}
        />
      </React.Fragment>
    );
  }
}

export default ListCharacters;
