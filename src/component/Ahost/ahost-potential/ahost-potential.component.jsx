import React from "react";
import { connect } from "react-redux";
import { toggleLearnHidden } from "../../../Redux/learn/learn.actions";

import './ahost-potential.styles.scss';

const AhostPotential = ({ toggleLearnHidden }) => {
    return(
        <div className="ahost-potential">
            <div className="potential">
                <div className="estimate" onClick={toggleLearnHidden} >
                    How we estimate your earnings potential
                </div>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleLearnHidden: () => dispatch(toggleLearnHidden()),
})

export default connect(null,mapDispatchToProps)(AhostPotential);