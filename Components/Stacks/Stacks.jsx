import { Component } from 'react';
//import html from '/images/html.png'
//import css from '/images/css.png'
//import javascript from '/images/javascript.png'
//import react from '/images/react.png'
//import git from '/images/git.png'
import React, { useState } from 'react';
//import './Stacks.css';

const[state, setState]= useState([
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
])

function Stacks(props) {

  return (
    <div className='stacks'>
      <div className='stacks-wrapper'>
        <h1>Conhecimento em:</h1>
        <div className='flex-container'>
          <img src={this.state[0].img_url} />
          <img src={this.state[1].img_url} />
          <img src={this.state[2].img_url} />
        </div>
        <div className='flex-container'>
          <img src={this.state[3].img_url} />
          <img src={this.state[4].img_url} />
        </div>
      </div>
    </div>
  );

}

export default Stacks;
