import { Component } from 'react';
//import html from '/images/html.png'
//import css from '/images/css.png'
//import javascript from '/images/javascript.png'
//import react from '/images/react.png'
//import git from '/images/git.png'
import React, { useState } from 'react';
//import './Stacks.css';

/*const[state, setState]= useState([
  {
    name: 'html',
    img_url: '/images/html.png'
  },
  {
    name: 'css',
    img_url:'/images/css.png'
  },
  {
    name: 'javascript',
    img_url: '/images/javascript.png'
  },
  {
    name: 'react',
    img_url: '/images/react.png'
  },
  {
    name: 'git',
    img_url: '/images/git.png'
  }
])*/

function Stacks(props) {

  return (
    <div className='stacks'>
      <div className='stacks-wrapper'>
        <h1>Conhecimento em:</h1>
        <div className='flex-container'>
          <img src='/images/html.png' />
          <img src='/images/html.png' />
          <img src='/images/html.png' />
        </div>
        <div className='flex-container'>
          <img src='/images/html.png' />
          <img src='/images/html.png' />
        </div>
      </div>
    </div>
  );

}

export default Stacks;
