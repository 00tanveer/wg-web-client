// LandingSection.js
import './LandingSection.css'
import landing from './landing.jpg'

function LandingSection() {
  return (
    <section class="landing-section">
      <div class="flex-container">
        <div class="item-1">
          <h1>Know your net worth today.</h1>
          <p>Grow your net worth by knowing what you are worth today. Download the free <strong>personal balance sheet template below</strong> and use this to calculate your net worth today. Measure what you want to manage - your wealth. </p>
          <button 
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
  );
}

export default LandingSection;