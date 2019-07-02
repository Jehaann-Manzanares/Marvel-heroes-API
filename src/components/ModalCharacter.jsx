import React from "react";
import ReactDOM from "react-dom";
import "./css/ModalCharacter.css";
import ImgShare from "./images/ic_chare@2x.png";
import ImgHeader from "./images/DeadPool.png";

function ModalCharacter(props) {
  if (!props.modalIsOpen) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="overlay" id="overlay">
      <section className="modal active" id="modal">
        <div className="modal-header" id="modalHeader">
          <img src={ImgHeader} alt="" id="modalImage" />
        </div>
        <div className="modal-container">
          <div className="modal-titles">
            <h1 className="titles" id="modalTitle">
              Captain Marvel
            </h1>
            <img
              onClick={props.onCloseModal}
              className="icon"
              src={ImgShare}
              alt=""
            />
          </div>
          <span>Carol Danvers</span>Name
          <p id="modalDescription">
            Carol Susan Jane Danvers is a fictional superhero appearing in
            American comic books published by Marvel Comics. Created by writer
            Roy Thomas and artist Gene Colan, Danvers first appeared as an
            officer in the United States Air Force and a colleague of the Kree
            superhero Mar-Vell in Marvel Super-Heroes #13 (March 1968) and later
            became the first incarnation of Ms. Marvel in Ms. Marvel #1
            (cover-dated January 1977) after her DNA was fused with Mar-Vell's
            during an explosion
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </section>
    </div>,
    document.getElementById("modal")
  );
}

export default ModalCharacter;
