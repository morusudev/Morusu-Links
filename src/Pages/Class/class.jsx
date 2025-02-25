import { useEffect, useState } from 'react'
import "./class.css"
import LinksBar from '../../Components/LinksBar/LinksBar'

function Class(){

    useEffect(() => {
        document.title = 'Morusu | Aulas'
    }, [])

    const [skills, setSkills] = useState([]);

    useEffect(() => {
        setSkills([
        { id: 1, 
            link: "https://skillicons.dev/icons?i=html",
            width: "40px",
            alt: "HTML5" 
        },

        { id: 2, 
            link: "https://skillicons.dev/icons?i=css",
            width: "40px",
            alt: "CSS3" 
        },

        { id: 3, 
            link: "https://skillicons.dev/icons?i=js",
            width: "40px",
            alt: "JavaScript" 
        },

        { id: 4, 
            link: "https://skillicons.dev/icons?i=react",
            width: "40px",
            alt: "React JS" 
        },

        { id: 5, 
            link: "https://skillicons.dev/icons?i=py",
            width: "40px",
            alt: "Python" 
        }])
    }, [])  


    return(
        <div className="containerAll">  
            <div className="profile">
                <div className='photoPerfil'></div>
                <h1>Vinícius Lima</h1>
                <h3>Desenvolvedor Full-Stack JS</h3>
                <p>&lt; Olá futuros alunos(as) /&gt;</p>
            </div>

            <hr />

            <div className='alignBio'>
                <p>Estou aqui para oferecer aulas de programação para iniciantes ou para quem deseja fortalecer seus conhecimentos em HTML, CSS, Javascript,    Python, React JS e Lógica de programação.
                </p>
        
                <p>Minhas aulas são altamente personalizadas, práticas e direcionadas ao aprendizado de programação.
                    Uso métodos muito baseados em problemas reais e exemplos para garantir que os alunos possam aprender a aplicar habilidades com base no dia a dia, de uma maneira muito clara e no ritmo do aluno.
                </p>
            </div>

            <hr />

            <h3>Tecnologias abordadas</h3>

            <div className="skillsAlign">
                {skills.map((skill) => (
                    <img src={skill.link} width={skill.width} alt={skill.alt} />
                ))}  
            </div>

            <LinksBar id="btnCallClass" link="https://www.instagram.com/morusu.ink/" name="Quero ser aluno(a)" />
            <LinksBar link="/" name="Voltar" />

            <p className="developer">MorusuDev&copy; all rights reserved {new Date().getFullYear()}</p>
        </div>
    )
}

export default Class