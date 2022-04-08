import React from 'react';
import Header from './component/header/header.component';
import SearchBox from './component/search-box/search-box.component';
import Banner from './component/banner/banner.component';
import Booking from './component/booking/booking.component';
import Trip from './component/trip/trip.component';
import Main from './component/main-trip/main-trip.component';
import Experiences from './component/experiences/experiences.component';
import Question from './component/question/question.component';
import Footer from './component/footer/footer.component';
import Lower from './component/lower-footer/lower-footer.component';
import Locationdrop from './component/location-dropdown/location-dropdown.component';

import './App.css';

const App = () => {
  return(
    <>
    <Header />
    <SearchBox />
    <Banner />
    <Booking />
    <Trip />
    <Main />
    <Experiences />
    <Question/>
    <Footer />
    <Lower />
    <Locationdrop />
    </>
  )
  };


export default App;
