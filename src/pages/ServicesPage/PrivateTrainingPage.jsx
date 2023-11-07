import React from 'react'
import RyanHeadshot from '../../images/Ryan1.jpeg';


function PrivateTrainingPage() {
  return (
    <div>
    <div className='Profile'>
    <img src={RyanHeadshot} height={400} width={320}  alt = 'Profile Pic'/>
   </div>

<section className='Control' id='intro'>
 <div className='box3'>
   <h1>PRIVATE TRAINING</h1>
<p>Looking to receive my full-attention and improve by competing against my drills and yourself? Then private training is for you. I recommend mixing in private and group sessions to receive the best of both worlds</p>
</div>
</section>
</div> 
 )
}

export default PrivateTrainingPage