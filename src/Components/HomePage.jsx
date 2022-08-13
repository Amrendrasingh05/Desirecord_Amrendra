import '../App.css';

import topImg from '../Images/Image 13.png'
import topImgBanner1 from '../Images/Screenshot (734).png'
import topImgBanner2 from '../Images/Screenshot (735).png'
import topImgBanner3 from '../Images/Screenshot (736).png'
import BackgroundHome from '../Images/HomeBackground.jpg'
import BackgroundHome2 from '../Images/HomeBckgrnd2.jpg'
import SecondSecImg1 from '../Images/Screenshot (737).png'
import SecondSecImg2 from '../Images/wp2567401.webp'
import studioImg from '../Images/1562272d3d291a10e1515242db1b740f.jpg'
import SecondSecSliderImg1 from '../Images/Image 07.png'
import SecondSecSliderImg2 from '../Images/Image 08.png'
import SecondSecSliderImg3 from '../Images/Screenshot (741).png'
import SecondSecSliderImg4 from '../Images/Screenshot (742).png'
import SecondSecSliderImg5 from '../Images/Screenshot (743).png'
import ThirdSecSliderImg1 from '../Images/Image 04.png'
import ThirdSecSliderImg2 from '../Images/Image 05.png'
import ThirdSecSliderImg3 from '../Images/Image 06.png'
import JoinUsImg from '../Images/Image 33.png'
import HomePageVideo from "../Images/HomePageVideo.mp4"
import GalleryBackground from '../Images/Screenshot (744).png'
import GalleryPage from './Gallery.component';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import Myheader from './header.component';
import Myfooter from './footer.component';


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



function MainPage() {
  return (
    <div className='HomePage'>
     <Myheader/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <div className='MainPage'>

        <div className='topImg'>
          {/* <img src={topImg} alt="" /> */}
          <video controls loop autoPlay>
        <source src={HomePageVideo} type="video/mp4" />
            </video>
        </div>
        <div className="HText">We Created The Best For <br /> Your Entertainment</div>

      </div>

      <div className='ContactWatchBtn'>
        <a className='ContactBtn' href='/contact'>Contact Us</a>
        <button className='WatchBtn'>Watch Now &nbsp; <i class="fa-brands fa-youtube"></i></button>
      </div>




      <Carousel className='TopImgSlider' responsive={responsive}>
        <div><img src={topImgBanner1} alt="" /></div>
        <div><img src={topImgBanner2} alt="" /></div>
        <div><img src={topImgBanner3} alt="" /></div>
        <div><img src={topImgBanner1} alt="" /></div>
        <div><img src={topImgBanner1} alt="" /></div>
        <div><img src={topImgBanner2} alt="" /></div>
        <div><img src={topImgBanner3} alt="" /></div>
        <div><img src={topImgBanner1} alt="" /></div>
      </Carousel>;

      <div className='SocialAccounts'>
        <i class="fa-brands fa-twitter"></i> <br />
        <i class="fa-brands fa-instagram"></i> <br />
        <i class="fa-brands fa-youtube"></i>
      </div>

      {/* <div className="secondPortion">
        <img src={BackgroundHome} className='BackgroundHome' alt="" />
        <img className='test' src={topImgBanner1} alt="" />
      </div> */}

      <div className='BackgroundHome' style={{ backgroundImage: `url(${BackgroundHome})` }}>

        <img src={SecondSecImg1} className="SecondSecImg1" alt="" />
        <img src={SecondSecImg2} className="SecondSecImg2" alt="" />
        <img src={studioImg} className="SecondSecImg3" alt="" />

        <div className='SecondsecAbt'>
          <h1>About Us</h1> <hr /> <br />
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

      {/* <div className='SocialAccounts2'>
        <i class="fa-brands fa-twitter"></i> <br />
        <i class="fa-brands fa-instagram"></i> <br />
        <i class="fa-brands fa-youtube"></i>
      </div> */}


      <div className='BackgroundHome' style={{ backgroundImage: `url(${BackgroundHome2})` }}>
        .


        <Carousel className='RightPartSlider2' responsive={responsive}>
          <div><img src={SecondSecSliderImg1} alt="" /></div>
          <div><img src={SecondSecSliderImg2} alt="" /></div>
          <div><img src={SecondSecSliderImg3} alt="" /></div>
          <div><img src={SecondSecSliderImg4} alt="" /></div>
          <div><img src={SecondSecSliderImg5} alt="" /></div>
          <div><img src={SecondSecSliderImg2} alt="" /></div>
          <div><img src={SecondSecSliderImg4} alt="" /></div>
          <div><img src={SecondSecSliderImg5} alt="" /></div>
        </Carousel>

        <div className='LeftPartSlider2'>We Serve Best <br /> So You Don't<br /> Forget Your <br /> Memories</div>

        <div className='SecondSecBelow'>
          <div className="SecondSecWed">Wedding <br /> Photography</div>
          <p>Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Veritatis, maiores, <br />
            neque laboriosam accusantium illo quisquam /</p>
        </div>
      </div>

      {/* <div className='SocialAccounts2'>
        <i class="fa-brands fa-twitter"></i> <br />
        <i class="fa-brands fa-instagram"></i> <br />
        <i class="fa-brands fa-youtube"></i>
      </div> */}

      <div className="ThirdSection">
        <Carousel className='ThirdSectionSlider' responsive={responsive}>
          <div><img src={ThirdSecSliderImg1} alt="" /></div>
          <div><img src={ThirdSecSliderImg2} alt="" /></div>
          <div><img src={ThirdSecSliderImg3} alt="" /></div>
          <div><img src={ThirdSecSliderImg1} alt="" /></div>
          <div><img src={ThirdSecSliderImg2} alt="" /></div>
          <div><img src={ThirdSecSliderImg3} alt="" /></div>
        </Carousel>

        <div className='ThirdSectionText'>
          <div className="ThirdSectionPic">PHOTOGRAPHY</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam possimus nobis voluptates reprehenderit, odio harum id quaerat sequi commodi! Magni velit, aut voluptatibus voluptates vitae eum aspernatur incidunt minima culpa.</p>
        </div>

      </div>

      <div className='GallerySectionHomePage'>
        <div className='GallerySectionHomeText'>
          <h1>OUR GALLERY</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Expedita veniam porro molestiae similique. Eveniet dolorem non <br />
            perferendis a, nostrum reprehenderit rem doloribus, iure <br />
            cupiditate ipsa ipsam vero dolore voluptas! Voluptatibus.</p>
        </div>
        <div className="CenterText">OUR GALLERY</div>

        <Carousel className='GallerySlider' responsive={responsive}>
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

      <div className='JoinUs'>
        <img className='JoinusBckgrnd' src={JoinUsImg} alt="" />

        <div className="JoinusText">
          <h1>Join us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Neque nihil, architecto placeat, soluta corporis perferendis <br />
            </p>
        </div>
        <a className="JoinusBtn" href="/CareerPage">Join Now</a>
      </div>
     
     <Myfooter/>

    </div>



  );
}

export default MainPage;