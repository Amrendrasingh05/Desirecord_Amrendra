import '../App.css';


import CareerPageTopImg from '../Images/Image 48.png'


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



function CareerPage() {
    return (
        <div className='CareerPage'>
            <Myheader />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className='CareerPageTop'>``

                <div className='CareertopImg'>
                    <img src={CareerPageTopImg} alt="" />

                </div>

                <div className="careerText">
                    Join an awesome team <br />
                    and create a amizing  <br />
                    memories

                </div>

                <a href="" className='ExploreAllJobs'>Explore All Jobs</a>

            </div>


            <div style={{ fontSize: "54.4716px", marginLeft: "5%", marginTop: "7%", fontFamily: 'DM Serif Text' }}>Search Your job</div>

            <div className="BelowSearchBtnCareer">
                <input type="text" placeholder='Post Your Searching' />
                <input type="text" placeholder='Post Your Searching' />
                <button>Search</button>
            </div>

            <div className="DesignerAndPhotographerCareerPage">

                <div>
                    <div style={{ fontSize: "58px", marginTop: "10%", letterSpacing: "-0.005em" }}>UI UX Designer</div>
                    <div style={{ marginTop: "1.5%", fontSize: "23px", color: "#666666" }}>Description</div>
                    <div style={{ marginTop: "1.5%", fontStyle: "22px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus <br />
                        consectetur gravida auctor natoque etiam. Hendrerit odio <br />
                        porta ut nibh purus. Nisi tristique odio metus eu fringilla <br />
                        dignissim neque.

                    </div>

                    <div style={{ marginTop: "1.5%", fontSize: "23px", color: "#666666" }}>Tag</div>

                    <div style={{ marginTop: "1.5%", fontStyle: "22px", paddingBottom: "2%" }}>
                        Low light , Manual Photography, pro mode, night
                    </div>
                </div>

                <button className='ApplyBtnCareer'>Apply Now</button>

            </div>



            <div className="DesignerAndPhotographerCareerPage">

                <div>
                    <div style={{ fontSize: "58px", marginTop: "10%", letterSpacing: "-0.005em" }}>Photographer</div>
                    <div style={{ marginTop: "1.5%", fontSize: "23px", color: "#666666" }}>Description</div>
                    <div style={{ marginTop: "1.5%", fontStyle: "22px" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus <br />
                        consectetur gravida auctor natoque etiam. Hendrerit odio <br />
                        porta ut nibh purus. Nisi tristique odio metus eu fringilla <br />
                        dignissim neque.

                    </div>

                    <div style={{ marginTop: "1.5%", fontSize: "23px", color: "#666666" }}>Tag</div>

                    <div style={{ marginTop: "1.5%", fontStyle: "22px", paddingBottom: "2%" }}>
                        Low light , Manual Photography, pro mode, night
                    </div>
                </div>

                <button className='ApplyBtnCareer'>Apply Now</button>

            </div>


            <Myfooter />

        </div>



    );
}

export default CareerPage;