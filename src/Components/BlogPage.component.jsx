import '../App.css';

import BlogTopImg from '../Images/Image 34.png'
import swing from '../Images/Image 49.png'
import GirlLight from '../Images/Image 50.png'

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



function BlogPage() {
  return (

    <div className='Blogpage'>
      <Myheader />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />

      <div className="blogTop">

        <div className="blogTopText">
        Gain More Knowledge by <br />
        reading. Build your skill <br />
        today
        </div>

        <div className="blogTopImg">
          <img src={BlogTopImg} alt="" />
        </div>

      </div>

      <div style={{fontSize:"46px", marginLeft:"5%", marginTop:"10%"}}>All Blog</div>
    
      <div className="blogMidContent">

        <div className="blogMidText">
          <div style={{fontSize:"58px", marginTop:"10%", letterSpacing: "-0.005em"}}>How to shoot in low light..</div>
          <div style={{marginTop:"5%", fontSize:"23px", color: "#666666"}}>Description</div>
          <div style={{marginTop:"5%", fontStyle:"22px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus <br />
          consectetur gravida auctor natoque etiam. Hendrerit odio <br />
          porta ut nibh purus. Nisi tristique odio metus eu fringilla <br />
          dignissim neque.

          </div>

          <div style={{marginTop:"5%", fontSize:"23px", color: "#666666"}}>Tag</div>

          <div style={{marginTop:"5%", fontStyle:"22px"}}>
          Low light , Manual Photography, pro mode, night
          </div>         

        </div>

        <div className="blogMidImg">
          <img src={swing} alt="" />
        </div>
      </div>


      <div className="blogMidContent">

      <div className="blogMidImg">
          <img src={GirlLight} alt="" />
        </div>


        <div className="blogMidText">
          <div style={{fontSize:"58px", marginTop:"10%", letterSpacing: "-0.005em"}}>How to shoot in low light..</div>
          <div style={{marginTop:"5%", fontSize:"23px", color: "#666666"}}>Description</div>
          <div style={{marginTop:"5%", fontStyle:"22px"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus <br />
          consectetur gravida auctor natoque etiam. Hendrerit odio <br />
          porta ut nibh purus. Nisi tristique odio metus eu fringilla <br />
          dignissim neque.

          </div>

          <div style={{marginTop:"5%", fontSize:"23px", color: "#666666"}}>Tag</div>

          <div style={{marginTop:"5%", fontStyle:"22px"}}>
          Low light , Manual Photography, pro mode, night
          </div>         

        </div>
      </div>
    
      <Myfooter/>
      
    </div>


  );
}

export default BlogPage;