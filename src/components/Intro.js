import "../assets/scenery.jpg";
function Intro(){
    return(
        <>
        <div class="container-intro">
                <img class="intro-img"src={require("../assets/scenery.jpg")}alt="intro"></img>
                <div class='container-introcontent'>
                    <h2>Kathy</h2>
                    <p>My name is Kathy. I have a passion for blah blah blah with interests in blah blag 
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag bla
                    I have a passion for blah blah blah with interests in blah blag blablah.</p>
                </div>
        </div>
        </>
    );
}
export default Intro;