import React from 'react'
import RyanHeadshot from '../../images/Ryan1.jpeg';

function SmallGroupPage() {
  return (
    <div>
    <div className='Profile'>
    <img src={RyanHeadshot} height={390} width={320}  alt = 'Profile Pic'/>
   </div>

<section className='Control' id='intro'>
 <div className='box2'>
   <h1>SMALL GROUP</h1>
<p>Groups of 2-6 players is a good way to receive the attention of a private session along with the competitive nature that a group session provides </p>
</div>
</section>
</div>  )
}

export default SmallGroupPage