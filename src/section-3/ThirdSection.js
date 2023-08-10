// SecondSection.js
import './ThirdSection.css'
import refayet from './refayet.png'
import abstractImage from './abstract-image.jpg'
// import landing from './landing.jpg'

function ThirdSection() {
  return (
    <section class="third-section">
      <div class="flex-container">
        <div class="item-1">
          <img src={refayet} className="person-image" alt="refayet chowdhury" />
          <p>“Our savings lose half of its value every 5 years. It could be even worse. I was a banker for 5 years. I know how people are misguided on one of the most important aspects of our lives - money. I’d love to talk to you and help you understand where you need to work to improve your finances.” <br/><br/><strong>Muhammad Refayet Chowdhury</strong><br/><strong>Co-founder and CEO</strong> </p>
          <break/>
        </div>
        <div class="item-2">
          <button 
            className="book-session-btn"
          >
          Book a session
          </button>
        </div>
      </div>
    </section>
  );
}

export default ThirdSection;