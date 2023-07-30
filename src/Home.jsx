import './homeStyle.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
    
const Home = ({charityData}) => {

    const projectContainerRef = useRef(null);

    const scrollLeft = () => {
      if (projectContainerRef.current) {
        projectContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' }); 
      }
    };
  
    const scrollRight = () => {
      if (projectContainerRef.current) {
        projectContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' }); 
      }
    };    



    return ( 
    <div className="home-page">
   

    <div className='text'>
            <p className='main-text'>Be the <span>Hero</span> that changes lives</p>
            <p className='subtitle'>We will distribute your assitance
               to anyone in need out there, 
               anytime and anywhere.
            </p>
        <Link to="/donate">
          <button>Donate Today ↗</button>
        </Link>
        </div>
        <div className='images'>
            <img src="./pic1.jpg" alt="pic1" />
            <img src="./pic2.jpg" alt="pic2" />
            <img src="./pic2.jpg" alt="pic3" />
            <img src="./pic5.jpg" alt="pic4" />
            <img src="./pic5.jpg" alt="pic5" />
            <img src="./pic6.jpg" alt="pic6" />
        </div>
         
          <p className="main-text" id='foundation'> 
            <b>Our Foundation</b> will do charity to all levels ranging from
          </p>

        <div class="rounded">
            <p>Poverty</p>
            <p>Disaster</p>
            <p>Disease</p> 
         </div>
         <p className='rounded-p-text'>The overall aid will be donated to 
            the three main points above, and all of it 
            will be directly donated to those in need</p> 
   
     {/*Cycling through the projects*/}
       <div className="main-text"id='firstMain'>
    <div className="flex-text"> 
        <div>Our Current Projects</div>
        <div className='arrows'>
         <button className='move-button' onClick={scrollLeft}><img src="./icons8-back-50.png" alt="back" /> </button>
         <button className='move-button' onClick={scrollRight}><img src="./icons8-forward-50.png" alt="forward" /></button>  
        </div>
    </div>
       </div>

       <div className="project-container" ref={projectContainerRef}> 
       {charityData.map((project) => (
        <div className="projects" key={project.index}>
          <img src={project.img} alt={`Project ${project.index}`} />
          <p className='project-title'>{project.title}</p>
          <p className='project-description'>{project.description}</p>
          <div className='custom-progress'> <progress value={project.amountReceived} max={project.amountNeeded} /></div>
         
          <p>Current received: ${project.amountReceived}/{project.amountNeeded}</p>
        </div>
      ))}</div>
      <br />
      <br />
      <br />

     {/*Extra exposition
     <div className='exposition-container'>
       <img className='exposition' src="./pic6.jpg" alt="pics" />
       <img className='exposition' src="./pic5.jpg" alt="pics" />
       </div>*/}
    
    <div className='main-text' id='secondMain'>
      More than <b>10+ million people</b> have been helped by us
    </div> 
    <br />
    <br />
    <p className='mission'> Whether it's a small contribution or a large donation, each gift makes a profound impact on the lives of those we serve. Together, we can
 ignite a chain reaction of kindness, and no act of giving is ever too small.</p>
 <Link to="/donate">
          <button>Donate Today ↗</button>
        </Link>
   
    {/*Team and FAQ Section */}
    <br />
    <br />
    <br />
    <div className="main-text" id='thirdMain'>
        <b>Meet</b> our team
    </div>
      <p className='mission'>Meet our incredible team! 
         A group of diverse and passionate 
         individuals who share a common goal: 
         to spread love and hope to those in need. 
         With each member bringing unique skills and 
         experiences to the table, 
        we are a force for positive change.</p>
    
    <div className='team-container'>
          <img src="./pic3.jpg" alt="pics" />   
      
            <div className='rounded' id='new-round'>
            <Link to="/team">  
            <p>Let's get to know each other ↗</p>
            </Link>  
           </div>     
            
    </div>
    
       {/*FAQ*/}
       <div className="main-text" id='faq-main'>
        <b>Do you have any questions?</b>
        <p>Please feel free to ask us and check our FAQ section</p>
       </div>
       <Link to="/faq">
          <button>FAQ ↗</button>
        </Link>
       <br />
       <br />


      
     
    
    </div> 
    
    );
}
 
export default Home;