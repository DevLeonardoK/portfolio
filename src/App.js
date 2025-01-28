import ParticlesComponent from "./components/particles";
import "./App.css";

import { WelcomeScreen } from "./components/WelcomeScreen";
import { AboutPage } from "./components/AboutPage";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <ParticlesComponent id="particles"></ParticlesComponent>
      <WelcomeScreen></WelcomeScreen>
      <AboutPage></AboutPage>
      <Skills></Skills>
    </>
  );
}

export default App;
