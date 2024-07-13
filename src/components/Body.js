import React from 'react';
import Card from './Card.js';
import '../assets/coverbanner.jpg';

function Body() {
    return (
        <>
            <div className="outer-body">
                <h1>Projects</h1>
                <div className="container-body">
                    <div className="project">
                        <video className="info-video" controls>
                            <source src={require('../assets/pitch video.mp4')} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <Card
                            title="False Alarm Processing App"
                            description="This application was created in order to replace an older application 
                            that was in use at the time. In this video, no real people are used. Only for entertainment 
                            purposes and for showcasing the unfinished application. No real data was used. Repo is private for security purposes. 
                            Video made by me :)"
                        />
                    </div>
                    <div className="project">
                        <img className="info-picture" src={require('../assets/scenery.jpg')} alt="cat" />
                        <Card title="To be updated" description="To be updated " />
                    </div>
                    <div className="project">
                        <img className="info-picture" src={require('../assets/coverbanner.jpg')} alt="cat" />
                        <Card title="To be updated" description="To be updated " />
                    </div>
                    <div className="project">
                        <img className="info-picture" src={require('../assets/scenery.jpg')} alt="cat" />
                        <Card title="To be updated" description="To be updated" />
                    </div>
                </div>
            </div>
            <hr className="break"></hr>
        </>
    );
}

export default Body;
