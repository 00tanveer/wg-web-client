// LandingSection.js
import './LandingSection.css'
import landing from './landing.jpg'
import { useState } from 'react'
import Modal from '../components/Modal'
import { createPortal } from 'react-dom'

function LandingSection() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
    
    <section class="landing-section">
      <div class="flex-container">
        <div class="item-1">
          <h1>Know your net worth today.</h1>
          <p>Grow your net worth by knowing what you are worth today. Download the free <strong>personal balance sheet template below</strong> and use this to calculate your net worth today. Measure what you want to manage - your wealth. </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="download-btn"
          >
          {'> '} Download Free
          </button>
        </div>
        <div class="item 2">
          <img src={landing} className="landing-picture" alt="landing" />
        </div>
      </div>
    </section>
      {isModalOpen && createPortal(
        <Modal onClose={() => setIsModalOpen(false)}/>,
        document.body
      )}
    </>
  );
}

export default LandingSection;