import { Fragment } from 'react';
import React, { Component } from 'react';
import ufsj from '/images/ufsj.png'
import senai from '/images/senai.png'
import ideal from '/images/ideal.png'
import cenje from '/images/cenje.png'
//import './Education.css';

class Formation extends Component {

  constructor(props){
    super(props);
    this.state ={
      formations: [
        {
          img: senai,
          title: 'Técnico em Segurança do Trabalho',
          completion: 'out/2012'
        } ,
        {
          img:ufsj,
          title: 'Bacharel em Ciência e Tecnologia',
          completion: 'dez/2017'
        } ,
        {
          img:ufsj,
          title: 'Bacharel em Engenharia Civil',
          completion: 'jul/2022'
        }
      ]
    }
  }

  render() {
    return (
      <Fragment>
        {this.state.formations.map((formation) =>
          <div className='formation-card'>
            <img className='formation-image' src={formation.img} alt=''></img>
            <h5 className='formation-title'>{formation.title}</h5>
            <p className='formation-completion'>Conclusão em: {formation.completion}</p>
          </div>      
        )} 
      </Fragment>         
    )
  }
}


class ExtraClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: [
        {
          title: 'Monitoria de Cálculo I',
          class: 'hidden-card',
          classSeta: 'seta',
          img: ufsj,
          description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
        },
        {
          title: 'Ideal Consultoria e Empreendimentos',
          class: 'hidden-card',
          classSeta: 'seta',
          img: ideal,
          description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
        },
        {
          title: 'Central de Empresas Juniores da UFSJ',
          class: 'hidden-card',
          classSeta: 'seta',
          img: cenje,
          description:'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum '
        }

      ]
    }
  }
 

  modifyShow = (activity) => {
    console.log(activity)
    console.log(activity.class)
    if (activity.class == 'hidden-card'){
      this.setState({
        class: 'show-card'})
      activity.setState({
        classSeta: 'seta-baixo'})
    } else {
      console.log('fui clicado com o show')
      this.setState({
        class: 'hidden-card'} )
      this.setState({
        classSeta: 'seta'})
    }
  }

  render() {
    return (
    <Fragment>
      {this.state.activities.map((activity) =>
        <Fragment>
          <div className='extraclass-card' onClick={() => this.modifyShow(activity)}>
            <h3 className='card-title'>{activity.title}</h3>
            <h3 className={activity.classSeta}>&#129168;</h3>
          </div>
          <div className={activity.class}>
            <img className='imagee' src={activity.img}></img>
            <p className='card-description'>{activity.description}</p>
          </div>
        </Fragment>        
      )}
    </Fragment>
  )}
 
}

function Education() {
  return (
    <div className='education'>
      <div className='education-wrapper'>
        <div className='education-info'>
          <h2 className='education-title'>Formação Acadêmica</h2>
          <div className='formation'>
            <Formation />
          </div>
        </div>
        <div className='education-display'>
          <ExtraClass/>
        </div>
      </div>
    </div>
  );
}

export default Education;
