import ParticlesComponent from "./components/particles";
import "./App.css";

function App() {
  return (
    <div className="container-fullscreen">
      <ParticlesComponent id="particles" />

      <div className="container-info">
        <h1 id="message-hello"> |HELLO|</h1>

        <span id="message-welcome">WELCOME TO MY PORTFOLIO</span>
      </div>
    </div>
  );
}

export default App;
