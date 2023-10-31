import React from 'react';
import RyanHeadshot from '../../images/RyanHeadshot.jpeg';

function Homepage() {
  return (
  <div>
    <h1 className='Homepage'> </h1>
      <div className='Profile'> <img src={RyanHeadshot} height={320} width={250}  alt = 'Profile Pic'/></div>

<section className='Control'>
    <div className='box2'>
      <h1>INTRO</h1>
      <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
    </div>
</section>
<section className='Control'>

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

<section className='Control'>
    <div className='box2'>
      <h1>My Mission</h1>
      <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
    </div>
</section>
<section className='Control'>

        <div className='box'>
        <h1> TECH STACK </h1>
        <p>MONGO, EXPRESS, REACT, NODEJS </p>
        <p>As a junior developer I am confident in my ability and skills within my stack.</p>
        </div>
        
        <div className='box'>
        <h1>MISSION</h1>
        <p>To help spread joy and compassion through technical solutions!</p>
        <p>Being able to work with a team and bring visions to reality is what excites me the most!</p>
        
        </div>

        <div className='box'>
        <h1>LOCATION</h1>
        <p>I am a American currently based in Santander, Spain. As a professional basketball player for the last 7 years I have been on the move but I am ready to hang my laces up and move to where ever I can pursue my career!</p>
        </div>


</section>



      

  </div>

  )}

export default Homepage;