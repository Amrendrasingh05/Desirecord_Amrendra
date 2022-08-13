import '../App.css';
import HeaderVideo from '../Images/Black Screen Butterfly Effect _ Flying Butterfly Effect Black Screen.mp4'
// import HeaderVideo from '../Images/MusicVideo.mp4'

function Myheader() {
    return (

        <header>
            <a href='/' style={{textDecoration:"None"}}>Desirecord</a>

            <video  width="122.95" height="70px" controls loop autoPlay>
        <source src={HeaderVideo} type="video/mp4" />
            </video>

            <div className="HeaderComponents">
                <div> <a href="/">Home</a> </div>
                <div> <a href="/About">About</a> </div>
                <div> <a href="/Gallery">Gallery</a> </div>
                <div> <a href="/Services">Service</a> </div>
                <div> <a href="/Blog">Blog</a> </div>
                <div> <a href="/Contact">Contact</a> </div>
            </div>
        </header>

    );
}

export default Myheader;