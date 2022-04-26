import React from "react";
import Hedaer3 from '../../component/Ahost/ahost-header/ahost-header.component';
import HostDrop from '../../component/Ahost/ahost-drop/ahost-drop.component';
import HostCarousel from "../../component/Ahost/ahost-carousel/ahost-carousel.component";
import AhostGuest from "../../component/Ahost/ahost-guest/ahost-guest.component";
import AhostPotential from "../../component/Ahost/ahost-potential/ahost-potential.component";
import Potential from "../../component/Ahost/potential/potential.component";
import { connect } from "react-redux";
import './a-host.styles.scss';

const AhostPage = ({ hidden9 }) => {
    return (
        <div className="ahost">
            <Hedaer3 />
            <HostDrop />
            <HostCarousel />
            <AhostGuest />
            <AhostPotential />
            
            {
                hidden9 ? null : <Potential />
            }

        </div>
    )
}

const mapStateToProps = ({ 
    learn: { hidden9 }}) => 
    ({ hidden9 });

export default connect(null, mapStateToProps)(AhostPage);