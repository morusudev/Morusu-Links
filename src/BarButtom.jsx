import { useEffect, useState } from 'react';
import LinksBar from './Components/LinksBar';
import Socials from './Components/Socials';

import './BarButtom.css';

function ButtonsComp() {
  useEffect(() => {
    document.title = 'Morusu | Links';
  }, []);

  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions([
      { id: 1, 
        name: "Portfólio", 
        link: "https://portfolio-morusu.vercel.app/", 
        title: "Portfólio" 
      },
      
      { 
        id: 2, 
        name: "Discord", 
        link: "https://discord.gg/7zS4wEdtdk", 
        title: "Discord" 
      },

      { id: 3, 
        name: "ArtStation", 
        link: "https://artstation.com/inkmors", 
        title: "ArtStation" 

      },

      { id: 4, 
        name: "Aulas Particulares", 
        link: "https://www.superprof.com.br/aprenda-zero-com-desenvolvedor-fullstack-aulas-programacao-html-css-javascript-python-logica.html", 
        title: "Super Profs" 
      }
    ]);
  }, [])


  return (
    <div className="container-all">
      <div className="profile">
        <div className='photoPerfil'></div>
        <h1>Vinícius Lima</h1>
        <h3>Desenvolvedor Full-Stack JS</h3>
        <p>&lt; Don't wait, put it into practice! /&gt;</p>
      </div>

      <hr />

      <div className="linksAlign">
        {options.map((option) => (
          <LinksBar key={option.id} name={option.name} link={option.link} title={option.title} />
        ))}  
      </div>

      <div className='socials-align'>
        <Socials link='https://github.com/inkmors' img='../assets/icons8-github-50.png' title='Github' />
        <Socials link='https://www.linkedin.com/in/vin%C3%ADcius-lima-738603284/' img='../assets/icons8-linkedin-48.png' title='Linkedin' />
        <Socials link='https://www.instagram.com/morusu.ink/' img='../assets/icons8-instagram-48.png' title='Instagram' />
        <Socials link='mailto:gvlima.contato@gmail.com' img='../assets/icons8-nova-mensagem-48.png' title='Email' />
      </div>

      <p className="developer">MorusuDev&copy; all rights reserved {new Date().getFullYear()}</p>
    </div>
  );
}

export default ButtonsComp;
