// Modal.js
import './SecondModal.css'
import { RiCloseLine } from "react-icons/ri";
import {useState } from 'react'
import { createClient } from 'contentful-management';

const url = "https://assets.ctfassets.net/noepe1fl3llv/679VJyNJsKfZPLr991hBKz/cb20d72f6bae21b265bc87dda19e7548/Personal_Balance_Sheet.xlsx"



function SecondModal({ onClose }) {
  const [email, setEmail] = useState('');
  const [name, setName ] = useState('')
  const [phone, setPhone ] = useState('')
  const [age, setAge ] = useState('')
  const [IsEntryCreated, setIsEntryCreated] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }
  
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleAgeChange(e) {
    setAge(e.target.value)
  }
  const client = createClient({
    accessToken: 'CFPAT-Fv8bCvvESWMdNndVTO3yP-73aO_RfUfHEl5GoDxrKj8'
  })

  // client
  // .getEntry('5PeGS2SoZGSa4GuiQsigQu')
  // .then((entry) => console.log(entry))
  // .catch((err) => console.log(err))

  const contactRequest = async () => {
    // call API 
    client.getSpace('noepe1fl3llv')
    .then((space) => space.getEnvironment('master'))
    .then(environment => 
      environment.createEntry('oneOnOneMeetingRequest', {
        fields: {
          name: {
            'en-US': name
          },
          email: {
            'en-US': email
          },
          phone: {
            'en-US': phone
          },
          age: {
            'en-US': Number(age)
          }
        }
      })
    )
    .then(entry => {
      console.log(entry)
      setIsEntryCreated(true);
    })
    .catch(console.error)
  }

  return (
    <div className="modal">
      
      <div className="modal-content">
        {IsEntryCreated ? (
          <>
            <button className="close-button" onClick={onClose}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <h1>We're contacting you in the next 24 hours! 😊</h1>
          </>
        ) : (
          <>
            <button className="close-button" onClick={onClose}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <h1>Please enter these details below and one of our team members will reach out to find a slot with you.</h1>
            <input type="text" placeholder="Your name" value={name} onChange={handleNameChange}></input>
            <input type="email" placeholder="Your email" value={email} onChange={handleEmailChange}></input>
            <input type="phone" placeholder="Your phone" value={phone} onChange={handlePhoneChange}></input>
            <input type="age" placeholder="Your age" value={age} onChange={handleAgeChange}></input>

            <button className="contact-btn" onClick={contactRequest}>Contact me</button>
          </>
        )}
      </div>
    </div>
  );
}

export default SecondModal;