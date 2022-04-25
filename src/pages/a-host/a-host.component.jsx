import React from "react";
import Hedaer3 from '../../component/ahost-header/ahost-header.component';
import HostDrop from '../../component/host-drop/host-drop.component';
import './a-host.styles.scss';

const AhostPage = () => {
    return(
        <div className="ahost">
            <Hedaer3 />
            <HostDrop />
        </div>
    )
}

export default AhostPage;