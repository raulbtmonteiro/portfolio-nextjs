import { Component } from 'react';
import html from '/images/html.png'
import css from '/images/css.png'
import javascript from '/images/javascript.png'
import react from '/images/react.png'
import git from '/images/git.png'
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
