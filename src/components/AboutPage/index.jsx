import { ImgAbout, MainScreen, TextAbout, TextInfoMe } from "./styles";
import imgPerfil from "../../assets/fotoPerfil.png";

const AboutPage = () => {
  return (
    <>
      <MainScreen>
        <TextAbout>SOBRE: </TextAbout>
        <ImgAbout src={imgPerfil}></ImgAbout>
        <TextInfoMe>
          Sou uma pessoa dinâmica, curiosa e apaixonada por aprender. Tenho
          facilidade em me adaptar a desafios e gosto de colaborar em soluções
          inovadoras. Valorizo o trabalho em equipe e busco crescer
          profissionalmente.
        </TextInfoMe>
        <TextInfoMe>
          Participo de um projeto de detecção de melanomas por inteligência
          artificial, no qual desenvolvi o site de apresentação. O trabalho foi
          premiado em vários estados do Brasil e nos credenciou para feiras
          científicas em Nova Iorque e na Itália.
        </TextInfoMe>
      </MainScreen>
    </>
  );
};

export { AboutPage };
