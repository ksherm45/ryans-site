import React from 'react'
import RyanHeadshot from '../../images/Ryan1.jpeg';


function PrivateTrainingPage() {
  return (
    <div>
    <div className='Profile'>
    <img src={RyanHeadshot} height={400} width={320}  alt = 'Profile Pic'/>
   </div>

<section className='Control' id='intro'>
 <div className='box2'>
   <h1>INTRO</h1>
   <p>I am looking to change the lives of every child and martian alike who has interest in the beautiful game of basketball. My biggest secret is to never dunk until the midway point of the year</p>
 </div>
</section>
</div> 
 )
}

export default PrivateTrainingPage