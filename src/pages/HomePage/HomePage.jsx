import React from 'react';
import RyanHeadshot from '../../images/Ryan1.jpeg';
import { SocialIcon } from 'react-social-icons';
import Ryan2 from '../../images/Ryan2.jpeg'


function Homepage() {
  return (
  <div id='page' className=''>
    <h1 className='Homepage'> </h1>
      <div className='Profile'>
       <img src={RyanHeadshot} height={400} width={320}  alt = 'Profile Pic'/>
      </div>

<section className='Control' id='intro'>
    <div className='box2'>
      <h1>INTRO</h1>
      <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
    </div>
</section>
<section className='Control' id='info'>

        <div className='box'>
        <h1> STREET CRED </h1>
        <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
        </div>
        
        <div className='box'>
        <h1>STYLE OF COACHING</h1>
        <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
        
        </div>

        <div className='box'>
        <h1>OTHER BOX</h1>
        <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
        </div>

</section>

<div className='Profile'>
       <img src={Ryan2} height={400} width={320}  alt = 'Profile Pic'/>
      </div>

<section className='Control'>
    <div className='box2'>
      <h1>My Mission</h1>
      <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
    </div>
</section>
<section className='Control' id='career'>

        <div className='box3'>
        <h1> TECH STACK </h1>
        <p>MONGO, EXPRESS, REACT, NODEJS </p>
        <p>As a junior developer I am confident in my ability and skills within my stack.</p>
        </div>
        
        <div className='box3'>
        <h1>MISSION</h1>
        <p>To help spread joy and compassion through technical solutions!</p>
        <p>Being able to work with a team and bring visions to reality is what excites me the most!</p>
        
        </div>


</section>

<section className='Control' id='contact'>

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

</section>



      

  </div>

  )}

export default Homepage;