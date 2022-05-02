import React from "react";
import OnlineFirst from "../../component/Online-exe/online-first/online-first.component";
import OnlineHeader from "../../component/Online-exe/online-header/online-header.component";
import OnlineFilter from "../../component/Online-exe/online-filter/online-filter.component";
import './online-exe.styles.scss';


const OnlineExe = () => {
    return(
        <div className="online-exe">
            <OnlineHeader />
            <OnlineFirst />
            <OnlineFilter />
        </div>
    )
};

export default OnlineExe;