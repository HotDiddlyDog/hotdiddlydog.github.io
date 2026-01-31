import React, { useState } from 'react';
import Card from './Card';
import videoFile from '../assets/pitch video.mp4'; // cleaner import

function Body() {
    const [flipped, setFlipped] = useState(false);

    return (
        <>
            <div className="outer-body">
                <h1>Projects</h1>
                <div className="container-body">
                    <div 
                        className={`card-container ${flipped ? 'flipped' : ''}`} 
                        onClick={() => setFlipped(!flipped)}
                    >
                        <div className="project card">
                            <div className="card-front">
                                <video className="info-video" controls>
                                    <source src={videoFile} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <h2>False Alarm Processing App</h2>
                                <p>HTML/CSS, JavaScript, MongoDB, Electron, Node.js</p>
                                <p>*flip me*</p>
                            </div>
                            <div className="card-back">
                                <Card
                                    title="Description"
                                    description={`As part of this 3-month capstone, I created a lighthearted pitch video to present our progress to stakeholders (no real people or 
                                        data were used. This is just for entertainment and to showcase the unfinished application).

                                    This project was fast-paced, involving everything from user testing wireframes to building out core application functionality. 
                                    I developed core features which included false alarm parsing, creating invoice objects for data storage, and designed backend models to handle invoices efficiently. This project required me to quickly get up to speed with technologies 
                                    I had never used before and applying those skills directly.

                                    Most importantly, this experience gave me a strong sense of what it's like to work on a real-world application: balancing work with communication and managing expectations based on
                                    stakeholder feedback. Even though the final product wasn’t fully realized, I gained invaluable insight into how to set realistic expectations for both myself and the people I’m building for.`}
                                />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default Body;
