import "../assets/scenery.jpg";
function Intro(){
    return(
        <>
        <div class="container-intro">
    
                <img class="intro-img me"src={require("../assets/me1.png")}alt="intro"></img>
                <div class='container-introcontent'>
                    <h2>About Me</h2>
                    <p>Hi, I'm Kathy Nguyen, a computer science major at the University of Memphis, with a dual passion for web development and data science. My journey through computer science has equipped me with a versatile skill set. I'm deeply interested in creating user-friendly, visually appealing websites and, at the same time, 
                        harnessing the power of data for informed decision-making. With a strong foundation in web development, I can build 
                        captivating online experiences, while my data science expertise allows me to extract insights and drive data-informed
                         strategies. I'm enthusiastic about blending these skills to develop web applications that not only look great but also incorporate data-driven features, making them more valuable to users and organizations. 


                         <br></br>
                         <br></br>

                        On my free time, I like to crochet, draw, take pictures, play video games, and hang out with the people closest to me.
                        If there is anything that you would like to share or like to collaborate on, feel free to contact me. 
                        
                    </p>
                </div>
        
        </div>
        </>
    );
}
export default Intro;