import {
  CardProjeto,
  ImgCard,
  MainScreen,
  TextProjects,
  TituloProjeto,
} from "./styles";

import imgPokedex from "../../assets/imgPokedex.jpg";
import imgQuantoFalta from "../../assets/fotoQuantoFalta.jpg";
import imgMelanoma from "../../assets/fotoMelanoma.png";
import imgStockAi from "../../assets/imgStockAi.jpg";
import imgPerfil from "../../assets/imgProfile.png";
const ProjectsPage = () => {
  return (
    <>
      <MainScreen>
        <TextProjects>PROJETOS</TextProjects>
        <CardProjeto>
          <ImgCard src={imgPokedex}></ImgCard>
          <TituloProjeto>
            <a href="https://devleonardok.github.io/pokedex/">Pokedex</a>
          </TituloProjeto>
        </CardProjeto>
        <CardProjeto>
          <ImgCard src={imgQuantoFalta}></ImgCard>
          <TituloProjeto>
            <a href="https://devleonardok.github.io/quantofalta/">
              Quanto Falta - Escolar
            </a>
          </TituloProjeto>
        </CardProjeto>
        <CardProjeto>
          <ImgCard src={imgMelanoma}></ImgCard>
          <TituloProjeto>
            <a href="https://devleonardok.github.io/melanoma-ai/">
              Deetecção de Melanoma IA
            </a>
          </TituloProjeto>
        </CardProjeto>
        <CardProjeto>
          <ImgCard src={imgStockAi}></ImgCard>
          <TituloProjeto>
            <a href="https://github.com/DevLeonardoK/stockAi">StockAi</a>
          </TituloProjeto>
        </CardProjeto>
        <CardProjeto>
          <ImgCard src={imgPerfil}></ImgCard>
          <TituloProjeto>
            <a href="https://devleonardok.github.io/MyProfile/">Meu Perfil</a>
          </TituloProjeto>
        </CardProjeto>
      </MainScreen>
    </>
  );
};

export { ProjectsPage };
