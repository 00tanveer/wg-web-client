// SecondSection.js
import './FourthSection.css'
import { useState } from 'react';
import { createClient } from 'contentful-management';

function FourthSection() {
  const [email, setEmail ] = useState('')
  const [isSubscribed, setIsSubscribed ] = useState(false)
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  const client = createClient({
    accessToken: 'CFPAT-Fv8bCvvESWMdNndVTO3yP-73aO_RfUfHEl5GoDxrKj8'
  })

  const subscribe = async () => {
    client.getSpace('noepe1fl3llv')
    .then((space) => space.getEnvironment('master'))
    .then(environment => 
      environment.createEntry('subscription', {
        fields: {
          email: {
            'en-US': email
          }
        }
      })
    )
    .then(entry => {
      console.log(entry)
      
      setIsSubscribed(true);
    })
    .catch(console.error)
  }

  return (
    <section class="fourth-section">
      <h1>Our mission is to democratize access to financial education and investing for the common people, not just the wealthy.</h1>
      <p>Stay with us for big updates soon!</p>
      <div class="container">
        {!isSubscribed ? (
          <>
            <input type="text" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
            <button
              onClick={subscribe}
            >Subscribe</button> 
          
          </>)
        : 
          <h2>You're in!</h2>
        }
      </div>
    </section>
  );
}

export default FourthSection;