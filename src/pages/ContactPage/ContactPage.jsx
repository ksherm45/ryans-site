import React from 'react';
import { SocialIcon } from 'react-social-icons';

function ContactPage() {
  return(
     <div>
    
      <div className='iconContainer'>
      <SocialIcon
              url="https://www.linkedin.com/in/kaj-bjoern-sherman/"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 100, width: 100 }}
            />
      
      <SocialIcon
              url="https://github.com/ksherm45"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 100, width: 100 }}
            />

       <SocialIcon
              url="https://www.instagram.com/ryannicholas32/?hl=en"
              className="mr-4"
              target="_blank"
              fgColor="#fff"
              style={{ height: 100, width: 100 }}
            />
       </div>

       <body className='iconContainer'>
     
    </body>

       </div>

  )}



export default ContactPage;
