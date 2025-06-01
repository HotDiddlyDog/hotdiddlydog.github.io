import "../assets/scenery.jpg";
function Intro(){
    return(
        <>
        <div class="container-intro">
    
                <img class="intro-img me"src={require("../assets/me1.png")}alt="intro"></img>
                <div class='container-introcontent'>
                    <h2>About Me</h2>
                    <p>Hi, I'm Kathy Nguyen. I recently graduated from the University of Memphis with a B.S. in Computer Science. 
                        I’m passionate about creatively building things and continuously learning new technologies and skills.
                        I have a diverse background in development, having worked in agile environments where collaboration and adaptability are key. 
                        My experience includes developing new features—such as adding user-facing functionality or improving workflows—fixing UI bugs to enhance usability, 
                        and automating processes to efficiently collect and analyze data. I’m always looking for new ways to integrate technology into my life to make everyday 
                        tasks easier and more efficient.

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