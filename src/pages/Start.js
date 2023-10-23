import {Link} from "react-router-dom";
import sound from "../assets/cookingmama.mp3"
function Start (){
    let audio = new Audio(sound);
    audio.volume = 0.1;

    function play(){
        audio.play();
    }

    return(
        <>
        <div class="start-container">
            
            <h1 class="welcome" >Welcome!</h1>
            <Link to="/Home">
                <img className="gif" onClick={play} src={require("../assets/toad.gif")} alt="toadhappy" />
            </Link>
        </div>
        </>
    )
}
export default Start;