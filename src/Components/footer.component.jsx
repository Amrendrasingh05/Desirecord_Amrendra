import '../App.css';

function Myfooter() {
    return (
        <>
        <footer>
            <div className="leftFooterPart">
                <div className="footerHeading">Desirecord</div>

                <div className="LeftFooterComponent">
                    <div>
                        <div style={{color:"gray",marginTop:"60%"}}>Quick Link </div>
                        <div>Home</div>
                        <div>About</div>
                        <div>Services</div>
                        <div>Contact</div>
                    </div>
                    <div>
                        <div style={{color:"gray",marginTop:"60%"}}>Company</div>
                        <div>Career</div>
                        <div>Blog</div>
                        <div>Gallery</div>
                    </div>
                </div>
            </div>

            <div className="rightFooterPart">

                <div className='RightFooterComponent'>Newsletter</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                     Ad inventore sint molestias necessitatibus vitae eos enim, <br />
                     </p>

                     <input type="text" name="" id="" placeholder='Name' className='FooterName'/>

                     <input type="email" name="" placeholder='Email' className="FooterEmail" />

                     <textarea placeholder='Your Message' name="" id="" cols="30" rows="10" className='FooterMessage'></textarea>

                     <button>Submit</button>

                     <div className='MostBottom'>www.Desirecord.com</div>

                   </div>

                   
        
        </footer>

        </>
    );
}

export default Myfooter;