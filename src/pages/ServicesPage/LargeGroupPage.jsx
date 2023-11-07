import React from 'react'
import RyanHeadshot from "../../images/Ryan1.jpeg"

function LargeGroupPage() {
  return (
    <div>
    <div className='Profile'>
    <img src={RyanHeadshot} height={390} width={320}  alt = 'Profile Pic'/>
   </div>

<section className='Control' id='intro'>
 <div className='box2'>
   <h1>LARGE GROUP</h1>
<p>Groups of 7 or more are ideal of teams or groups that would like to put together the individual work with the ability to show even more realistic in-game situations</p>  
</div>
</section>
</div>
  )
}

export default LargeGroupPage