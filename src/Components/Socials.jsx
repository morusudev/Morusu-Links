import "./Socials.css"

function Socials(props){
    return(
        <div className="socials">
            <a href={props.link} target="_blank" rel="noreferrer"><img src={props.img} alt={props.title} title={props.title}/></a>
        </div>   
    )
}

export default Socials