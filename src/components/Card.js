function Card(props) {
    return(
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {/* <button>View Project</button> */}
        </div>
    );
}
export default Card;