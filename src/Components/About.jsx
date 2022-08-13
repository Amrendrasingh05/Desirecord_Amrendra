import '../App.css';


import SecondSecImg1 from '../Images/Screenshot (737).png'
import SecondSecImg2 from '../Images/wp2567401.webp'
import studioImg from '../Images/1562272d3d291a10e1515242db1b740f.jpg'

import AboutPageBg from '../Images/Image 16.png'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import Myheader from './header.component';
import Myfooter from './footer.component';

import SecondSecSliderImg1 from '../Images/Image 07.png'
import SecondSecSliderImg2 from '../Images/Image 08.png'
import SecondSecSliderImg3 from '../Images/Screenshot (741).png'
import SecondSecSliderImg4 from '../Images/Screenshot (742).png'
import SecondSecSliderImg5 from '../Images/Screenshot (743).png'


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function AboutPage() {
  return (
    <div className='HomePage'>
      <Myheader />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />


      <div className='BackgroundHome'>

        <img src={SecondSecImg1} className="SecondSecImg1" alt="" />
        <img src={SecondSecImg2} className="SecondSecImg2" alt="" />
        <img src={studioImg} className="SecondSecImg3" alt="" />

        <div className='SecondsecAbt'>
          <h1>Our Story</h1> <hr /> <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Corporis magni nostrum ipsa sit reiciendis modi, beatae explicabo <br />
            debitis saepe dolorem asperiores dolore perspiciatis iusto illum <br />
            labore similique accusamus, dolorum nam!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Corporis magni nostrum ipsa sit reiciendis modi, beatae explicabo <br />
            debitis saepe dolorem asperiores dolore perspiciatis iusto illum <br />
            labore similique accusamus, dolorum nam!</p>
        </div>




      </div>
      <div className="Whyus">
        <img src={AboutPageBg} alt="" />
        <div className="WhyusTxt">
          <div> <h1>Why Us?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  <br />
              Sint reprehenderit nam quod similique vero ipsa amet iusto. <br />
              Aliquid voluptatum accusamus quas velit modi dolorem quibusdam assumenda nobis officia. Quam, animi.</p>
          </div>
          <button>Read Me</button>
        </div>
      </div>

      
      <Carousel className='GalleryTopSlider' responsive={responsive}>
        <div><img src={SecondSecSliderImg1} alt="" /></div>
        <div><img src={SecondSecSliderImg2} alt="" /></div>
        <div><img src={SecondSecSliderImg3} alt="" /></div>
        <div><img src={SecondSecSliderImg4} alt="" /></div>
        <div><img src={SecondSecSliderImg5} alt="" /></div>
        <div><img src={SecondSecSliderImg2} alt="" /></div>
        <div><img src={SecondSecSliderImg4} alt="" /></div>
        <div><img src={SecondSecSliderImg5} alt="" /></div>
      </Carousel>

      <div>
        <h1>What people say <br /> 
        about us</h1>
        <Carousel className='GalleryTopSlider' responsive={responsive}>
        <div><img src={SecondSecSliderImg1} alt="" /></div>
        <div><img src={SecondSecSliderImg2} alt="" /></div>
        <div><img src={SecondSecSliderImg3} alt="" /></div>
        <div><img src={SecondSecSliderImg4} alt="" /></div>
        <div><img src={SecondSecSliderImg5} alt="" /></div>
        <div><img src={SecondSecSliderImg2} alt="" /></div>
        <div><img src={SecondSecSliderImg4} alt="" /></div>
        <div><img src={SecondSecSliderImg5} alt="" /></div>
      </Carousel>
      </div>

      <Myfooter />

    </div>



  );
}

export default AboutPage;