import React, { useState } from "react";
import { connect } from "react-redux";
import { toggleLearnHidden } from "../../../Redux/All/all.actions";
import Potential from "../potential/potential.component";
import './ahost-potential.styles.scss';

const AhostPotential = ({ toggleLearnHidden }) => {
    const [modalOpen, setModalOpen] = useState(false)
    return (
        <div className="ahost-potential" >
            <div className="potential">
                <div className="estimate" onClick={toggleLearnHidden} >
                    How we estimate your earnings potential
                </div>
                {
                    modalOpen && <Potential className="pp" setModalOpen={setModalOpen} />
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleLearnHidden: () => dispatch(toggleLearnHidden()),
})


export default connect(null, mapDispatchToProps)(AhostPotential);