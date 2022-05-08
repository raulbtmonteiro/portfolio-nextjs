import Link from "next/link";
import './Header.css'

const navItens = [ 
  {
    titulo: 'Sobre mim',
    link: '/'
  }, 
  {
    titulo: 'Projetos',
    link: '/projetos'
  },
  {
    titulo: 'Formação/Esperiências',
    link: '/formacao'
  },
  {
    titulo: 'Contato',
    link: '/contato'
  }
]

function Header(props) {

  const RenderNavItens = ({itens}) => {
    return(
      itens.map( (index) => (
        <li className='nav-bar-item'><Link className='nar-bar-link' href={index.link}>{index.titulo}</Link></li>
      ))
    )
  }
 
  return (
    <header>
      <div className='header-wrapper'>
        <h1>Raul Monteiro</h1>
        <img className='logo' src={props.logo}></img>
        <nav>
          <ul id='nav-bar'>
            <RenderNavItens itens={navItens}/>
          </ul>
        </nav>
      </div>
    </header>
  
  );
}

export default Header