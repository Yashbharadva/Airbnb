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
import { connect } from 'react-redux';
import Guest from './component/guest/guest.component';
import ProfileDropdown from './component/profile-dropdown/profile-dropdown.component';

import './App.css';

const App = ({hidden, hidden2, hidden3}) => {
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
    <ProfileDropdown />
    {
      hidden ? null : <Locationdrop />
    },
    {
      hidden2 ? null : <Guest />
    },
    {
      hidden3 ? null : <header />
    }
    </>
  )
  };

  const mapStateToProps = ({  location: { hidden }, guest: { hidden2 }, profile: { hidden3} }) => ({
    hidden, hidden2
  });


export default connect(mapStateToProps)(App);
