import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const testimonials = () => {

     const slider= useRef();
     let tx = 0;

const slideForward = ()=>{
     if(tx >-50){
      tx -= 25;

     }
     slider.current.style.transform = `translateX(${tx}%)`
}

const slideBackward = ()=>{
  if(tx <0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}





  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>London Neta 1</h3>
                    <span>BDFY Edusity, BANGLADESH</span>
                    <p>Choosing to oursue my degree at BDFY Edusity was one of the best decisions I've ever made.The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                   <img src={user_2} alt="" />
                   <div>
                     <h3>Zarek Tia 2</h3>
                     <span>BDFY Edusity, BANGLADESH</span>
                     <p>Enrolling at BDFY Edusity has been a life-changing experience for me. The learning environment is both inspiring and welcoming, and the faculty members go above and beyond to support our academic journey. I’m proud to be part of such a dynamic institution.</p>
                   </div>
                </div>
              </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                   <img src={user_3} alt="" />
                   <div>
                     <h3>Desh Nayok 3</h3>
                     <span>BDFY Edusity, BANGLADESH</span>
                    <p>Joining BDFY Edusity was a turning point in my educational journey. The modern campus, excellent academic resources, and a culture that encourages personal growth have helped me thrive both inside and outside the classroom.</p>
                   </div>
               </div>
             </div>
            </li>

            <li>
              <div className="slide">
                <div className="user-info">
                   <img src={user_4} alt="" />
                   <div>
                     <h3>Ek Dhofar Ghushok 4</h3>
                     <span>BDFY Edusity, BANGLADESH</span>
                     <p>Studying at BDFY Edusity has been an incredible opportunity. The high-quality education, hands-on learning experiences, and a strong sense of community have made my time here both rewarding and unforgettable.</p>
                   </div>
                </div>
             </div>
            </li>

            

          </ul>
        </div>
      
    </div>
  )
}

export default testimonials
