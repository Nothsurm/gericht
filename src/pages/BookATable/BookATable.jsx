import React, { useState } from 'react';
import { TableNavbar } from '../../pages';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import { BookSuccess } from '../../pages';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import "react-datepicker/dist/react-datepicker.css";
import './BookATable.css';

function BookATable({ open,onClose }) {
  const [data, setData] = useState({ name: "", email: "", phone: "", date: "", time: "", people: ""})
  const [selectedDate, setSelectedDate] = useState(new Date().getTime() + 24 * 60 * 60 * 1000)
  const [value, onChange] = useState('');
  const [openModalSuccess, setOpenModalSuccess] = useState(false)

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({...data, [name]: value})
  }

  const handleBooking = (e) => {
    e.preventDefault();
    setData({
      name: "",
      email: "",
      phone: ""
    })
    setOpenModalSuccess(true);
  }

  return (
    <div>
      <div className='app__bookATable app__bg' id='BookATable'>
        <div className="app__bookATable-navbar">
          <TableNavbar />
        </div>
        <div className="app__wrapper">
          <div className="app__bookATable-section">
            <div className="app__bookATable-title">
              <SubHeading title='Book A Table'/>
            </div>
            <form onSubmit={handleBooking}>
              <div className="app__bookATable-name">
                <label className='p__cormorant' htmlFor="fullname">Full Name:</label>
                <input type="text" name="name" id="fullname" placeholder='Enter name here' value={data.name} onChange={handleChange} required/>
              </div>
              <div className="app__bookATable-email">
                <label className='p__cormorant' htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter email here' onChange={handleChange} value={data.email} required />
              </div>
              <div className="app__bookATable-phone">
                <label className='p__cormorant' htmlFor="number">Phone Number:</label>
                <input type="tel" name="phone" id="number" placeholder='Enter number here' onChange={handleChange} value={data.phone} required/>
              </div>
              <div className="app__bookATable-dateTimePeople">
                <label className='p__cormorant' htmlFor="date">Date:</label>
                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}/>
                <label className='p__cormorant' htmlFor="time">Time:</label>
                <TimePicker label="Basic Time Picker" onChange={onChange} value={value} required/>
                <label className='p__cormorant' htmlFor="date">No. of People:</label>
                <select value={value} onChange={e => onChange(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>
              <div className="app__bookATable-button">
                <button className='custom__button'>Book A Table</button>
              </div>
              <BookSuccess open={openModalSuccess} onClose={() => setOpenModalSuccess(false)}/>
            </form>
          </div>
          <div className="app__bookATable-img">
            <img src={images.restaurant} alt="restaurant img" />
          </div>
        </div>
      </div>
        <div className='app__footer section__padding'>
          <div className="app__footer-links">
            <div className="app__footer-links_contact">
              <h1 className='app__footer-headtext'>Contact Us</h1>
              <p className='p__opensans'>7 Lane Ends, Betterworth, Rudheathe, M99 1SA</p>
              <p className='p__opensans'>+00 555-11-3322</p>
            </div>
            <div className="app__footer-links_logo">
              <img src={images.gericht} alt="footer_logo" />
              <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
              <img src={images.spoon} alt="spoon" className='spoon_img' style={{ marginTop: 15 }}/>
              <div className="app__footer-links_icons">
                <a href="https://www.facebook.com/" target='_blank'><FiFacebook /></a>
                <a href="https://twitter.com/home?" target='_blank'><FiTwitter /></a>
                <a href="https://www.instagram.com/" target='_blank'><FiInstagram /></a>
              </div>
            </div>
            <div className="app__footer-links_work">
              <h1 className='app__footer-headtext'>Working Hours</h1>
              <p className='p__opensans'>Monday-Friday:</p>
              <p className='p__opensans'>09:00 am - 11:00 pm</p>
              <p className='p__opensans'>Saturday-Sunday:</p>
              <p className='p__opensans'>11:00 am - 10:00 pm</p>
            </div>
          </div>
        <div className="footer__copyright">
          <p className='p__opensans'>2023 Gericht. All Rights Reserved.</p>
        </div>
      </div>
  </div>
  )
}

export default BookATable