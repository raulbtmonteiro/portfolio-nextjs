//import selfie from '/images/foto.jpg';
//import './AboutMe.css';

function AboutMe() {

  return (
    <div className='aboutme'>
      <div className='aboutme-wrapper'>
        <div className='aboutme-img'>
          <img src='/images/foto.jpg' />
        </div>
        <div className='aboutme-info'>
          <p>Hello World, eu sou o</p>
          <h1>Raul Monteiro</h1>
          <p>Estudante de programação para aplicações Front-End.</p>
        </div>        
      </div>
    </div>
  );
}

export default AboutMe;
