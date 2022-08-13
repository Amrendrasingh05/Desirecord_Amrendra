import '../App.css';



import BackgroundHome from '../Images/star.JPG'

import ContactImg1 from '../Images/Image 40.png'
import ContactImg2 from '../Images/Image 41.png'

import Myheader from './header.component';

function Contact() {
  return (
    <>
      <Myheader />
      <div className='BackgroundStar' style={{ backgroundImage: `url(${BackgroundHome})` }}>

        <img src={ContactImg1} className="SecondSecImg1" alt="" />
        <img src={ContactImg2} className="SecondSecImg2" alt="" />

        <div className='ContactInfo'>
          <div className='RightContactComponent'>Connect With Us</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Ad inventore sint molestias necessitatibus vitae eos enim, <br />
          </p>

          <input type="text" name="" id="" placeholder='Name' className='FooterName' />

          <input type="email" name="" placeholder='Email' className="FooterEmail" />

          <textarea placeholder='Your Message' name="" id="" cols="30" rows="10" className='FooterMessage'></textarea>

          <button>Submit</button>

        </div>

      </div>
    </>)
}

export default Contact;