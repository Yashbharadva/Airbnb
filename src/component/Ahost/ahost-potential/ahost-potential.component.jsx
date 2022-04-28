import React, { useState } from "react";
import "./ahost-potential.styles.scss";
import Modal from "../potential/potential.component";
import { connect } from "react-redux";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
        <div className="all-open">
        <div className="titleopen" onClick={() => {
          setModalOpen(true);
        }}>
      How we estimate your earnings potential
      </div>
      </div>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}



export default App;