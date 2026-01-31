import "../assets/scenery.jpg";
function Intro(){
    return(
        <>
        <div class="container-intro">
    
                <img class="intro-img me"src={require("../assets/me1.png")}alt="intro"></img>
                <div class='container-introcontent'>
                    <h2>About Me</h2>
                    <p>Hi, I'm Kathy Nguyen. I recently graduated from the University of Memphis with a B.S. in Computer Science. 
                        I’m passionate about learning new technologies and continuously improving my skills. I have experience with front-end and back-end development, and I enjoy working on projects
                        that challenge me to think critically and creatively. Working as a team player is important to me, and I value collaboration and communication in any project I take.

                         <br></br>
                         <br></br>

                        On my free time, I like to crochet, draw, take pictures, play video games, and hang out with the people closest to me.
                       
                    </p>
                </div>
        
        </div>
        <hr class='break'></hr>
        </>
    );
}
export default Intro;