import '../App.css';

import Myheader from './header.component';
import Myfooter from './footer.component';
import Carousel from "react-multi-carousel";
import SecondSecSliderImg1 from '../Images/Image 07.png'
import SecondSecSliderImg2 from '../Images/Image 08.png'
import SecondSecSliderImg3 from '../Images/Screenshot (741).png'
import SecondSecSliderImg4 from '../Images/Screenshot (742).png'
import SecondSecSliderImg5 from '../Images/Screenshot (743).png'
import GalleryVideo from '../Images/videoplayback.mp4'



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


function Gallery() {
  return (
    <>
      <Myheader />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />


      <div className='GalleryPage'>

        <div className='galleryHeading'>Gallery
        </div>

        <div className="GalleryDescription">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae mollitia odit eveniet, magni accusamus non illum rem soluta obcaecati nesciunt aperiam cupiditate quibusdam fugiat odio modi! Quibusdam modi necessitatibus dolorem.
        </div>

        <button className="GalleryViewBtn">View</button>


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

      <div className="portfolio">
        <img className='Img1' src={SecondSecSliderImg5} alt="" />
        <div>
          <div className="PortfolioHeading1">Company One</div>
          <div className="PortfolioHeading1Description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus soluta veniam amet aut aliquid quidem consequuntur magnam ex magni, assumenda dolore minima aliquam velit maiores temporibus, sunt officiis sint.
          </div>
          <div className="Photshoot">PHOTOSHOOT 1</div>
        </div>
      </div>

      <div className="portfolio">

        <div>
          <div className="PortfolioHeading2">Company Two</div>
          <div className="PortfolioHeading2Description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus soluta veniam amet aut aliquid quidem consequuntur magnam ex magni, assumenda dolore minima aliquam velit maiores temporibus, sunt officiis sint.
          </div>
          <div className="Photshoot2">PHOTOSHOOT 2</div>
        </div>
        <img className='Img2' src={SecondSecSliderImg5} alt="" />
      </div>

      <div className='Gvideo'>
      <video  width="1123.95" height="620" controls loop autoPlay>
        <source src={GalleryVideo} type="video/mp4" />
      </video>
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
      
      <Myfooter />
    </>
  );
}

export default Gallery;