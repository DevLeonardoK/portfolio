import ParticlesComponent from "./components/particles";
import "./App.css";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { AboutPage } from "./components/AboutPage";
import { Skills } from "./components/Skills";
import { ProjectsPage } from "./components/ProjectsPage";

function App() {
  return (
    <>
      <ParticlesComponent id="particles"></ParticlesComponent>
      <WelcomeScreen></WelcomeScreen>
      <AboutPage></AboutPage>
      <Skills></Skills>
      <ProjectsPage></ProjectsPage>
    </>
  );
}

export default App;
