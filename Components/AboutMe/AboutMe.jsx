import selfie from '../../public/images/foto';
//import './AboutMe.css';

function AboutMe() {

  return (
    <div className='aboutme'>
      <div className='aboutme-wrapper'>
        <div className='aboutme-img'>
          <img src={selfie} />
        </div>
        <div className='aboutme-info'>
          <h1>hello world, my name is: </h1>
        </div>        
      </div>
    </div>
  );
}

export default AboutMe;
