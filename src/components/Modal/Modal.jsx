import React, { useState } from 'react';
import { SubHeading, ModalSuccess } from '../../components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import './Modal.css';

const Modal = ({ open,onClose }) => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [openModalSuccess, setOpenModalSuccess] = useState(false)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = document.getElementById('fullname');
    fullName.value = '';
    const email = document.getElementById('email');
    email.value = '';
    const phoneNumber = document.getElementById('number');
    phoneNumber.value = '';
    setOpenModalSuccess(true);
  }

  if(!open) return null
    return (
      <div className="app__modal-overlay">
          <div className="app__modal-container" id='app__modal-append'>
            <form onSubmit={handleSubmit}>
              <div className="app__modal-title">
                <SubHeading title='Book A Table'/>
                <button onClick={onClose} className='custom__button close-btn'>X</button>
              </div>
              <div className="app__modal-name">
                <label className='p__cormorant' htmlFor="fullname">Full Name:</label>
                <input type="text" name="fullName" id="fullname" placeholder='Enter name here' value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="app__modal-email">
                <label className='p__cormorant' htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" placeholder='Enter email here' value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="app__modal-phone">
                <label className='p__cormorant' htmlFor="number">Phone Number:</label>
                <input type="tel" name="phoneNumber" id="number" placeholder='Enter number here' value={number} onChange={(e) => setNumber(e.target.value)} required/>
              </div>
              <div className="app__modal-date">
                <label className='p__cormorant' htmlFor="date">Date:</label>
                <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} id='date'/>
              </div>
              <div className="app__modal-button">
                <button className='custom__button'>Book A Table</button>
                <ModalSuccess open={openModalSuccess} onClose={() => setOpenModalSuccess(false)}/>
              </div>
            </form>
          </div>
      </div>
    )
  }

export default Modal