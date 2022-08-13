import '../App.css';

import Myheader from './header.component';
import Myfooter from './footer.component';
import Carousel from "react-multi-carousel";
import ServiceTopImg1 from '../Images/Image 42.png'
import ServiceTopImg2 from '../Images/Image 43.png'
import ServiceTopImg3 from '../Images/Image 44.png'
import ServiceImg1 from '../Images/Image 45.png'
import ServiceImg2 from '../Images/Image 46.png'
import ServiceImg3 from '../Images/Image 47.png'
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


function Services() {
    return (
        <>
            <Myheader />
            <div className='ServicePage'>
           <div className='ServiceHeader'>
           We shoot for your enchance <br />
           and make your memories <br />
           beautiful</div>

           <div className="SevicePageTopImg">
           <img src={ServiceTopImg1} className="SevicePageTopImg1" alt="" />
           <img src={ServiceTopImg2} className="SevicePageTopImg2" alt="" />
           <img src={ServiceTopImg3} className="SevicePageTopImg3" alt="" />
           </div>



            <div className="portfolio">
                <img className='Img1' src={ServiceImg1} alt="" />
                <div>
                    <div className="PortfolioHeading1">Service One</div>
                    <div className="PortfolioHeading1Description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus soluta veniam amet aut aliquid quidem consequuntur magnam ex magni, assumenda dolore minima aliquam velit maiores temporibus, sunt officiis sint.
                    </div>
                   
                </div>
            </div>

            <div className="portfolio">

                <div>
                    <div className="PortfolioHeading2">Service Two</div>
                    <div className="PortfolioHeading2Description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus soluta veniam amet aut aliquid quidem consequuntur magnam ex magni, assumenda dolore minima aliquam velit maiores temporibus, sunt officiis sint.
                    </div>
                   
                </div>
                <img className='Img2' src={ServiceImg2} alt="" />
            </div>

            <div className="portfolio">
                <img className='Img1' src={ServiceImg3} alt="" />
                <div>
                    <div className="PortfolioHeading1">Service Three</div>
                    <div className="PortfolioHeading1Description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis delectus soluta veniam amet aut aliquid quidem consequuntur magnam ex magni, assumenda dolore minima aliquam velit maiores temporibus, sunt officiis sint.
                    </div>
                   
                </div>
            </div>

            </div>
           
            <Myfooter />
        </>
    );
}

export default Services;