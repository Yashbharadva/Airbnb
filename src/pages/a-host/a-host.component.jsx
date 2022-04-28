import React, { useState } from "react";
import Hedaer3 from '../../component/Ahost/ahost-header/ahost-header.component';
import HostDrop from '../../component/Ahost/ahost-drop/ahost-drop.component';
import HostCarousel from "../../component/Ahost/ahost-carousel/ahost-carousel.component";
import AhostGuest from "../../component/Ahost/ahost-guest/ahost-guest.component";
import AhostPotential from "../../component/Ahost/ahost-potential/ahost-potential.component";
import Potential from "../../component/Ahost/potential/potential.component";
import Superhost from "../../component/Ahost/superhost/superhost.component";
import Aircover from "../../component/Ahost/aircover/aircover.component";
import Ahostfooter from "../../component/Ahost/ahost-footer/ahost-footer.component";
import { connect } from "react-redux";
import AhostHeader2 from "../../component/Ahost/ahost-header2/ahost-header2.component";
import './a-host.styles.scss';
import Footer from "../../component/footer/footer.component";
import AhostLower from "../../component/Ahost/ahost-lower/ahost-lower.component";

const AhostPage = ({ hidden9 }) => {
    return (
        <div className="ahost">
            <AhostHeader2 />
            <Hedaer3 />
            <HostDrop />
            <HostCarousel />
            <AhostGuest />
            <AhostPotential />
            <Superhost />
            <Aircover />
            <Ahostfooter />
            <Footer />
            <AhostLower />
            {
                hidden9 ? null : <Potential />
            }
        </div>
    )
}

const mapStateToProps = ({ learn: { hidden9 }}) =>  ({ hidden9 });

export default connect(mapStateToProps)(AhostPage);