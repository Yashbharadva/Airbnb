import React from 'react';
import Header from './component/header/header.component';
import SearchBox from './component/search-box/search-box.component';
import Banner from './component/banner/banner.component';
import Booking from './component/booking/booking.component';
import Trip from './component/trip/trip.component';

import './App.css';

const App = () => {
  return(
    <>
    <Header />
    <SearchBox />
    <Banner />
    <Booking />
    <Trip />
    
    </>
  )
  };


export default App;
