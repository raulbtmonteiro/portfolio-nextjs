import React from 'react';
import { Component } from 'react';
import instagram from '../../public/images/instagram';
import github from '../../public/images/github';
import linkedin from '../../public/images/linkedin';
import whatsapp from '../../public/images/whatsapp';
//import './Contact.css';

class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    this.inputChangeName = this.inputChangeName.bind(this);
    this.inputChangeEmail = this.inputChangeEmail.bind(this);
    this.inputChangeSubject = this.inputChangeSubject.bind(this);
    this.inputChangeMessage = this.inputChangeMessage.bind(this);
  }

  inputChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  inputChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  inputChangeSubject(e) {
    this.setState({
      subject: e.target.value
    })
  }

  inputChangeMessage(e) {
    this.setState({
      message: e.target.value
    })
  }

  render() {

    return (
      <div className='contact'>
        <div className='contact-wrapper'>
          <h2 className='contact-title'>Contato</h2>
          <div className='contact-form'>
            <form action="https://formsubmit.co/raulbtmonteiro@gmail.com" method="POST">
              <label>
                Nome
                <input onChange={this.inputChangeName} name='name' required type="text" />
              </label>
              <label>
                Seu e-mail
                <input onChange={this.inputChangeEmail} type="e-mail" name='email' required />
              </label>
              <label>
                Assunto
                <input onChange={this.inputChangeSubject} type="text" name='subject' required/>
              </label>
              <label>
                Mensagem
                <textarea onChange={this.inputChangeMessage} name='message' required/>
              </label>
              <button type="submit">Enviar</button>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://portfolio-nextjs-ecru-three.vercel.app/" />
            </form>
          </div>
          <div className='contact-info'>
            <a href='https://www.linkedin.com/in/monteiroraul/' target='_blank'><img src={linkedin} /></a>
            <a href='https://www.github.com/raulbtmonteiro' target='_blank'><img src={github} /></a>
            <a href='https://wa.me/5531997201454' target='_blank'><img src={whatsapp} /></a>
            <a href='https://www.instagram.com/raulbtm' target='_blank'><img src={instagram} /></a>
          </div>      
        </div>
      </div>
    );
  }
}

export default Contact
