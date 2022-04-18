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
import MainLanguage from './component/main-language/main-language.component';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

import './App.css';
import { useState } from 'react';


const App = ({hidden, hidden2, hidden3, hidden4}) => {
  const [dateState, setDateState] = useState(new Date())
  const changeDate = (e) => {
    setDateState(e)
  }
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
    <Calendar 
    value={dateState}
    onChange={changeDate}/>
    
    {
      hidden ? null : <Locationdrop />
    },
    {
      hidden2 ? null : <Guest />
    },
    {
      hidden3 ? null : <header />
    },
    {
      hidden4 ? null : <MainLanguage />
    }
    </>
  )
  };

  const mapStateToProps = ({  location: { hidden }, guest: { hidden2 }, profile: { hidden3 } , language: { hidden4 }}  ) => ({
    hidden, hidden2, hidden4
  });


export default connect(mapStateToProps)(App);
