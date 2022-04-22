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
import 'react-calendar/dist/Calendar.css';
import DateRangeFilter from './component/filter/DateRangeFilter.component';
import Date from './component/carousel/carousel.component';
import SearchField from './component/search-field/search-field.component';
import './App.css';
import { useState } from 'react';



const App = ({ hidden, hidden2, hidden4, hidden6, hidden7, hidden8 }) => {
  // const [modalOpen,setModalOpen] = useState(false)
  const onChange = (ranges) => {
    console.log(ranges);
  }
  return (

    <>
      <Header />
      <SearchBox />
      <Banner />
      <Booking />
      <Trip />
      <Main />
      <Experiences />
      <Question />
      <Footer />
      <Lower />
      <ProfileDropdown />
      <Date />
      

      {
        hidden ? null : <Locationdrop />
      },
      {
        hidden2 ? null : <Guest /> 
      },
      {
        hidden4 ? null : <MainLanguage />
      },
      {/* {
      modalOpen && <MainLanguage setOpenModal={setModalOpen} />
      }, */}
      {
        hidden6 ? null : <DateRangeFilter onChange={onChange} />
      },
      {
        hidden7 ? null : <DateRangeFilter onChange={onChange} />
      },
      {
        hidden8 ? null : <SearchField />
      }
      
    </>
  )
};

const mapStateToProps = ({ all: { hidden },
  all: { hidden2 },
  all: { hidden4 },
  all: { hidden6 },
  all: { hidden7 },
  all: { hidden8 }}) => ({
    hidden, hidden2, hidden4, hidden6, hidden7, hidden8
  });


export default connect(mapStateToProps)(App);
