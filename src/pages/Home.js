import "bootstrap/dist/css/bootstrap.min.css"
import "../assets/coverbanner.jpg"
import "../assets/plant.gif"
import Header from "../components/Header.js"
import Body from "../components/Body.js"
import Intro from "../components/Intro.js"

function Home (){
    return(
        <>
        <div class="background-color">
            {/* <img class="img-background"src={require("../assets/plant.gif")} alt="plant"></img> */}
            <div class="container">
                <Header/>
                <Intro/>
                <Body/>
            </div>
        </div>
        </>
    )
    
}

export default Home;