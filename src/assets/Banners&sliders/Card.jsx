import React from 'react'
import card1 from '../images/card1.png'
import card2 from '../images/card2.png'
export default function Card() {
  return (
    <>
    <div className='cardss col-12 p-5  row'> 
      <div className='col-7  '>
   <img src={card1} alt="" />
      </div>
      <div className='col-5'>
       <img src={card2} alt="" />
      </div>
    </div>
    </>
  )
}
