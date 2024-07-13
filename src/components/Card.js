import React from 'react';

function Card(props) {
    return (
        <div className="card-content">
            <h2>{props.title}</h2>
            <p className="card-description">{props.description}</p>
            {/* <button>View Project</button> */}
        </div>
    );
}

export default Card;