// Modal.js
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import {useState } from 'react'
import { createClient } from 'contentful-management';

const url = "https://assets.ctfassets.net/noepe1fl3llv/679VJyNJsKfZPLr991hBKz/cb20d72f6bae21b265bc87dda19e7548/Personal_Balance_Sheet.xlsx"

function Modal({ onClose }) {
  const [email, setEmail] = useState('');
  const [isDownloaded, setIsDownloaded] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  
  
  const client = createClient({
    accessToken: 'CFPAT-Fv8bCvvESWMdNndVTO3yP-73aO_RfUfHEl5GoDxrKj8'
  })

  // client
  // .getEntry('5PeGS2SoZGSa4GuiQsigQu')
  // .then((entry) => console.log(entry))
  // .catch((err) => console.log(err))

  const downloadFile = async () => {
    // call API 
    client.getSpace('noepe1fl3llv')
    .then((space) => space.getEnvironment('master'))
    .then(environment => 
      environment.createEntry('leadMagnetDownloadEntry', {
        fields: {
          email: {
            'en-US': email
          },
          fileUrl: {
            'en-US': url
          }
        }
      })
    )
    .then(entry => {
      console.log(entry)
      const link = document.createElement('a')
      link.href = url
      link.download = "WiserGates - Personal Balance Sheet Template"
      document.body.appendChild(link)
      link.click()
      setIsDownloaded(true);
    })
    .catch(console.error)
  }

  return (
    <div className="modal">
      
      <div className="modal-content">
        {isDownloaded ? (
          <>
            <button className="close-button" onClick={onClose}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <h1>Congratulations on your first step towards financial freedom! 🎉</h1>
          </>
        ) : (
          <>
            <button className="close-button" onClick={onClose}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <h1>Please enter your email and you're good to go!</h1>
            <input type="email" placeholder="" value={email} onChange={handleEmailChange}></input>
            <button className="download-btn" onClick={downloadFile}>Send me the file</button>
          </>
        )}
        
      </div>
    </div>
  );
}

export default Modal;