import ParticlesComponent from "./components/particles";
import "./App.css";
import logophoto from "./assets/fotoPerfil.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJs,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="container-fullscreen">
      <ParticlesComponent id="particles" />

      <div className="container-info">
        <h1 id="message-hello"> |HELLO|</h1>

        <span id="message-welcome">WELCOME TO MY PORTFOLIO</span>
      </div>

      <div className="info-me">
        <section id="info-general">
          <section id="photo-name">
            <img src={logophoto} alt="logo" />
          </section>
          <section id="about-me">
            <h2 id="tag">Leonardo Kremer - Full Stack Developer</h2>

            <h3 id="others-tags">
              <FontAwesomeIcon icon={faJava} className="icon" />
              <FontAwesomeIcon icon={faCss3} className="icon" />
              <FontAwesomeIcon icon={faHtml5} className="icon" />
              <FontAwesomeIcon icon={faSass} className="icon" />
              <FontAwesomeIcon icon={faReact} className="icon" />
              <FontAwesomeIcon icon={faDatabase} className="icon" />
              <FontAwesomeIcon icon={faJs} className="icon" />
              <span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nLWWz8thYRTHj5KFzETsKUl2JEnJQiRlYfHOzNLG2tZfYGMnEWWhlIWtGfNjo2ttpSSlLIR633cKCzb4Ts8N7325d+6dO3zrdN3nPvd87vOc4zyH6E0aIvpMRD+J6IWIoMJeTu9/Ovl7p49E9F2lY0hYh4g+CFdwbwBO9vW8oi8PAuBkbOvo1z2dGgyG6zG2S/T7XgCbzYZGoyGWDHS8B8BisaDf72Oz2UCn0wmfMf//D3C73RiNRjgrFApdz1Hv3Ov1olqtYr/fQ6hMJvPvEJ/Ph2w2i3K5jFarBY7jsFwuIaVKpaIc4nQ60e12oVTz+Zy/9no9ZRC73f7Xr73WeDzGZDLhfw+HQ2WQdrsNpdput8jlcpd7lgSyELPZjMPhoAhwPB6RTqcxnU4vY2yLZSHBYFARYLVaIZlMol6vvxsvFAryEI/HIwvgOA4OhwPFYvHmWTgclodotdpLpgi12+3Q6XQQjUZhNBrRbDZv5ohklnTgY7EY1us1BoMBSqUSEokE9Ho9b6lUCrPZ7AbA4mK1WkUhkrXL5XJBo9HwtSgej6NWq/Hgay0WC+TzeZhMJjE/fO16FQOwL2JiScD+8ZFI5Mb8fj9fGGUqxjOD/JCaEAgE+PiorW30dgzzzQMeaE/nM77zIEBb2LWwruLbnQGsibh0K8KuhS2NxYgFS41j9h4705mfS9/1B6pU8VypuW63AAAAAElFTkSuQmCC"
                  alt="img-spring-boot"
                  id="img-spring"
                />
              </span>
            </h3>
          </section>
        </section>
        <section id="info-personal">
          <h1>Olá, sou estudante do curso técnico de T.I </h1>
        </section>
      </div>
    </div>
  );
}

export default App;
