
function Header(){
    return(
        <header class="container-header">
          {/* <a href="" target="_blank" rel="noreferrer">
              <img className="gif" src={require("../assets/duck.gif")} alt="duck" />
              <div >
                <button class="button">
                  button
                </button>
              </div>
            </a> */}
            <a href="https://github.com/HotDiddlyDog" target="_blank" rel="noreferrer">
              <img className="gif" src={require("../assets/pandas.gif")} alt="pandalove" />
              <div >
                <button class="button">
                  GitHub
                </button>
              </div>
            </a>
            <a href="https://linkedin.com/in/kathyynguyen" target="_blank" rel="noreferrer">
              <img className="gif" src={require("../assets/dance.gif")} alt="dance" />
              <div>
                <button class="button">
                  Linkedin
                </button>
              </div>
            </a>
            <div>
              <h1 style={{textAlign: "center", padding: "50px"}}>
                Kathy Nguyen
              </h1>
            </div>
            <a href="https://www.freecodecamp.org/KitkatKathy" target="_blank" rel="noreferrer">
              <img className="gif" src={require("../assets/sleepy.gif")} alt="bunny" />
              <div>
                <button class="button">
                  FreeCodeCamp
                </button>
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <img className="gif" src={require("../assets/flowers.gif")} alt="flowers" />
              <div>
                <button class="button">
                  Resume
                </button>
              </div>
            </a>
            {/* <a href="" target="_blank" rel="noreferrer">
              <img className="gif" src={require("../assets/toto.gif")} alt="toto" />
              <div >
                <button class="button">
                  button
                </button>
              </div>
            </a> */}
        </header>
    );
}
export default Header;