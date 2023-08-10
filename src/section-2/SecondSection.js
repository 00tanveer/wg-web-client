// SecondSection.js
import './SecondSection.css'
import client_one_logo from './client_one_logo.png'
import arrowImage from './arrow.png'
// import landing from './landing.jpg'

function SecondSection() {
  return (
    <section class="second-section">
      <div class="flex-container">
        <div class="item-1">
          <h1>Redefine your relationship with money.</h1>
          <p>Personal finance is the art of managing your money. How much to save, where to invest and how to budget -  none of us are born knowing how to put together a smart, simple financial plan. That’s why we’re here. At WiserGates, we want to help everyone get better at money. </p>
          <break/>
          <h2>Corporates we worked with:</h2>
          <img src={client_one_logo} className="landing-picture" alt="landing" />
        </div>
        <div class="box">
          <h2>Are you a corporate?</h2>
          <img src={arrowImage} className="arrow" alt="down-arrow" />
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