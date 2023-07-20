import './homeStyle.css'

    
const Home = () => {

      

    return ( 
    <div className="home-page">
        <div className='text'>
            <p className='main-text'>Be the <span>Hero</span> that changes lives</p>
            <p className='subtitle'>We will distribute your assitance
               to anyone in need out there, 
               anytime and anywhere.
            </p>
            <button>Donate Today ↗</button>
        </div>
        <div className='images'>
            <img src="./pic1.jpg" alt="pic1" />
            <img src="./pic2.jpg" alt="pic2" />
            <img src="./pic2.jpg" alt="pic3" />
            <img src="./pic5.jpg" alt="pic4" />
            <img src="./pic5.jpg" alt="pic5" />
            <img src="./pic6.jpg" alt="pic6" />
        </div>
         
    </div> 
    );
}
 
export default Home;