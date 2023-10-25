import Card from "./Card.js";
import "../assets/coverbanner.jpg";

function Body(){
    return(
        <div class="container-body">
            <div class="project">
                <img className="info-picture"src={require("../assets/coverbanner.jpg")} alt="cat"/>
                <Card  title="To be updated" description="To be updated " />
            </div>
            <div class="project">
                <img className="info-picture"src={require("../assets/scenery.jpg")}alt="cat"/>
                <Card  title="To be updated" description="To be updated " />
            </div>
            <div class="project">
                <img className="info-picture"src={require("../assets/coverbanner.jpg")} alt="cat"/>
                <Card  title="To be updated" description="To be updated " />
            </div>
            <div class="project">
                <img className="info-picture"src={require("../assets/scenery.jpg")}alt="cat"/>
                <Card  title="To be updated" description="To be updated" />
            </div>
            
        </div>
    );
}
export default Body;