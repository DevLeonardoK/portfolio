import ParticlesComponent from "./components/particles";
import "./App.css";
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
import { WelcomeScreen } from "./components/WelcomeScreen";
import { AboutPage } from "./components/AboutPage";

function App() {
  return (
    <>
      <ParticlesComponent id="particles"></ParticlesComponent>
      <WelcomeScreen></WelcomeScreen>
      <AboutPage></AboutPage>
    </>
  );
}

export default App;
