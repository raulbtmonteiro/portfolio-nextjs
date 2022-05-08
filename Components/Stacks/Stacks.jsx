import { Component } from 'react';
import html from '../../public/images/html'
import css from '../../public/images/css'
import javascript from '../../public/images/javascript'
import react from '../../public/images/react'
import git from '../../public/images/git'
//import './Stacks.css';

function Stacks(props) {

  return (
    <div className='stacks'>
      <div className='stacks-wrapper'>
        <h1>Conhecimento em:</h1>
        <div className='flex-container'>
          <img src={html} />
          <img src={css} />
          <img src={javascript} />
        </div>
        <div className='flex-container'>
          <img src={react} />
          <img src={git} />
        </div>
      </div>
    </div>
  );

}

export default Stacks;
