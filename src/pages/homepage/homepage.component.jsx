import React from 'react';
import SearchBox from '../../component/Main/search-box/search-box.component';
import Banner from '../../component/Main/banner/banner.component';
import Booking from '../../component/Main/booking/booking.component';
import Trip from '../../component/Main/trip/trip.component';
import Main from '../../component/Main/main-trip/main-trip.component';
import Experiences from '../../component/Main/experiences/experiences.component';
import Question from '../../component/Main/question/question.component';
import Locationdrop from '../../component/Main/location-dropdown/location-dropdown.component';
import { connect } from 'react-redux';
import Guest from '../../component/Main/guest/guest.component';
import ProfileDropdown from '../../component/Main/profile-dropdown/profile-dropdown.component';
import MainLanguage from '../../component/Main/main-language/main-language.component';
import 'react-calendar/dist/Calendar.css';
import DateRangeFilter from '../../component/Main/filter/DateRangeFilter.component';
import Date from '../../component/Main/carousel/carousel.component';
import SearchField from '../../component/Main/search-field/search-field.component';
import Header2 from '../../component/Main/header/header.component';
import Footer from '../../component/Main/footer/footer.component';
import Lower from '../../component/Main/lower-footer/lower-footer.component';
import './homepage.styles.scss';

const HomePage = ({ hidden, hidden2, hidden4, hidden6, hidden7, hidden8 }) => {
  const onChange = (ranges) => {
    console.log(ranges);
  }
  return (

    <>
      <SearchBox />
      <Banner />
      <Booking />
      <Trip />
      <Main />
      <Experiences />
      <Question />
      <ProfileDropdown />
      <Date />
      <Header2 />
      <Footer />
      <Lower />
      
      {
        hidden ? null : <Locationdrop />
      }
      {
        hidden2 ? null : <Guest /> 
      }
      {
        hidden4 ? null : <MainLanguage />
      }
      {
        hidden6 ? null : <DateRangeFilter onChange={onChange} />
      }
      {
        hidden7 ? null : <DateRangeFilter onChange={onChange} />
      }
      {
        hidden8 ? null : <SearchField />
      }
      
    </>
  )
};

const mapStateToProps = ({ 
  all: { hidden },
  all: { hidden2 },
  all: { hidden4 },
  all: { hidden6 },
  all: { hidden7 },
  all: { hidden8 }}) => 
  ({ hidden, hidden2, hidden4, hidden6, hidden7, hidden8 });


export default connect(mapStateToProps)(HomePage);
