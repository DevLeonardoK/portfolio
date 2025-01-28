import {
  ListItem,
  ListSkills,
  MainScreen,
  TextSkills,
  SkillsTable,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faJava,
  faReact,
  faHtml5,
  faCss3,
  faSass,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
const Skills = () => {
  return (
    <>
      <MainScreen>
        <TextSkills>HABILIDADES:</TextSkills>
        <SkillsTable>
          <ListSkills>
            <ListItem>
              Java - <FontAwesomeIcon icon={faJava} className="icon" />
            </ListItem>
            <ListItem>
              React - <FontAwesomeIcon icon={faReact} className="icon" />
            </ListItem>
            <ListItem>
              SQL - <FontAwesomeIcon icon={faDatabase} className="icon" />
            </ListItem>
            <ListItem>
              HTML - <FontAwesomeIcon icon={faHtml5} className="icon" />
            </ListItem>
          </ListSkills>
          <ListSkills>
            <ListItem>
              CSS - <FontAwesomeIcon icon={faCss3} className="icon" />
            </ListItem>
            <ListItem>
              Sass - <FontAwesomeIcon icon={faSass} className="icon" />
            </ListItem>
            <ListItem>
              JavaScript - <FontAwesomeIcon icon={faJs} className="icon" />
            </ListItem>
            <ListItem>
              Python - <FontAwesomeIcon icon={faPython} className="icon" />
            </ListItem>
          </ListSkills>
        </SkillsTable>
      </MainScreen>
    </>
  );
};

export { Skills };
