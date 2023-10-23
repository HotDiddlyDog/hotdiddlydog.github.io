import "../assets/scenery.jpg";
function Intro(){
    return(
        <>
        <div class="container-intro">
            <img class="intro-img"src={require("../assets/scenery.jpg")}alt="intro"></img>
            <p>My name is Kathy. I have a passion for blah blah blah with interests in blah blag blah.</p>
        </div>
        </>
    );
}
export default Intro;