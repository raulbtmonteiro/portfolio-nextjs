import mrs from '../../public/images/mrs.png';
import mrv from '../../public/images/mrv.png';
import bb from '../../public/images/banco-do-brasil.png';
//import './Experiences.css';

function ExperienceCard (props) {
  return (
    <div className='experience-card'>
      <img className='experience-card-img' src={props.img}></img>
      <h2 className='experience-card-position'>{props.position}</h2>
      <p className='experience-card-description'>{props.description}</p>
      {props.principal == 'true' && <button className='experience-card-button'>&#11088; Emprego atual</button>}
    </div>
  )  
}

function Experiences(props) {
  return (
    <div className='experiences'>
      <div className='experiences-wrapper'>
        <h2 className='experiences-title'>Experiências Profissionais</h2>
        <div className='experiences-display'>
          <ExperienceCard
            img={mrs}
            position= 'Estagiário de Operação de Trens'
            description= 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
            principal= 'false'
          />
          <ExperienceCard
            img={mrv}
            position= 'Estagiário de Obra'
            description= 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
            principal= 'false'
          />
          <ExperienceCard
            img={bb}
            position= 'Agente Comercial'
            description= 'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
            principal= 'true'
          />
        </div>      
      </div>
    </div>
  );
}

export default Experiences;
