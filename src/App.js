import ParticlesComponent from "./components/particles";
import "./App.css";
import logophoto from "./assets/fotoPerfil.jpg";

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
              Java, React, JavaScript, Html, Css, Sass, MySQL, SpringBoot
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
