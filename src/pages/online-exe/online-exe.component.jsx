import React from "react";
import OnlineFirst from "../../component/Online-exe/online-first/online-first.component";
import OnlineHeader from "../../component/Online-exe/online-header/online-header.component";
import OnlineFilter from "../../component/Online-exe/online-filter/online-filter.component";
import NewTrip from "../../component/Online-exe/new-trip/new-trip.component";
import TopSeller from "../../component/Online-exe/top-seller/top-seller.component";
import Weekend from "../../component/Online-exe/weekend/weekend.component";
import GroupGreat from "../../component/Online-exe/group/group.component";
import ButtonTrip from "../../component/Online-exe/button-trip/button-trip.component";
import Footer from "../../component/Main/footer/footer.component";
import NextHour from "../../component/Online-exe/next-hour/next-hour.component";
import './online-exe.styles.scss';
import Lower from "../../component/Main/lower-footer/lower-footer.component";



const OnlineExe = () => {
    return(
        <div className="online-exe">
            <OnlineHeader />
            <OnlineFirst />
            <OnlineFilter />
            <NewTrip />
            <TopSeller />
            <NextHour />
            <Weekend />
            <GroupGreat />
            <ButtonTrip />
            <Footer />
            <Lower />
        </div>
    )
};

export default OnlineExe;