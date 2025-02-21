import "./LinksBar.css"

function linksComps(props){
    return(
        <div className="links">
            <a href={props.link} target="_blank" rel="noreferrer" title={props.title}>{props.name}</a>
        </div>   
    )
}

export default linksComps