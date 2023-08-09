// SecondSection.js
import './SecondSection.css'
import client_one_logo from './client_one_logo.png'
// import landing from './landing.jpg'

function SecondSection() {
  return (
    <section class="second-section">
      <div class="flex-container">
        <div class="item-1">
          <h1>Redefine your relationship with money.</h1>
          <p>Grow your net worth by knowing what you are worth today. Download the free <strong>personal balance sheet template below</strong> and use this to calculate your net worth today. Measure what you want to manage - your wealth. </p>
          <break/>
          <h2>Corporates we worked with:</h2>
          <img src={client_one_logo} className="landing-picture" alt="landing" />
        </div>
        <div class="box">
          <h2>Are you a corporate?</h2>
          <p>We offer free group masterclasses to corporates. We found out that the will to change and improve happens much stronger in a group. <strong>Sign up for a free group masterclass below.</strong></p>
          <button 
            className="sign-up-btn"
          >
          Sign Up
          </button>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;