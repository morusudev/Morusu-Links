import "./LinksBar.css"

function linksComps(props){
    return(
        <div className="links">
            <a href={props.link} id={props.id} target={props.target} rel="noreferrer" title={props.title}>{props.name}</a>
        </div>   
    )
}

export default linksComps