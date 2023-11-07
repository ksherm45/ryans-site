import React from 'react';
import RyanHeadshot from '../../images/Ryan1.jpeg';
import { SocialIcon } from 'react-social-icons';
import Ryan2 from '../../images/Ryan2.jpeg'


function Homepage() {
  return (
  <div id='page' className=''>
    <h1 className='Homepage'> </h1>
      <div className='Profile'>
       <img src={RyanHeadshot}   alt = 'Profile Pic'/>
      </div>

<section className='Control' id='intro'>
    <div className='box2'>
      <h1>INTRO</h1>
      <p>My name is Ryan Nicholas: a former 4 year Division 1 basketball player and current professional basketball player 10 years running </p>
    </div>
</section>
<section className='Control' id='info'>

        <div className='box3'>
        <h1>MY CAREER</h1>
<ul>
  <li>4 years playing Division 1 at University of Portland</li>
  <li>2 year Captain and 2 year All-Conference Honors</li>
  <li>Top 5 rebounding in school history</li>
  <li>Top 10 scoring in school history</li>
  <li>10 years Professionally in the top leagues of Germany, Lithuania, Spain and Luxembourg</li>
</ul>
        
        </div>
        
        <div className='box3'>
        <h1>STYLE OF COACHING</h1>
      <p>As a player myself, I’m what they call a player’s coach. This means I’m focused on teaching practical techniques and skills that will apply directly to my client’s development and in-game success</p>
        </div>

</section>

<div className='Profile'>
       <img src={Ryan2} height={400} width={320}  alt = 'Profile Pic'/>
      </div>

<section className='Control' id='career'>

        <div className='box3'>
        <h1> WHY TRAIN WITH ME? </h1>
        <p>I, myself, have been training my entire life under coaches and trainers from all over the world. Each have given me different tools that I have chosen to put in my personal toolbox, which I have then used for my success as a player. I pull directly from this toolbox to help my client’s improve their game. </p>
        </div>
        
        <div className='box3'>
        <h1>THE MENTAL GAME</h1>
        <p>I believe the mental game is equally important to the physical. This is why I have always studied Sport Psychology and received my bachelor’s degree in Psychology from the prestigious University of Portland. This is also why I’ve chosen to become a Certified Mental Coach. This certification has further equipped me with the ability to help players with the mental aspect of their game as well. </p>        
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
              url="https://www.instagram.com/32andyoullc/"
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