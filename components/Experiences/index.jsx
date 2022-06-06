import {
  ExperienceContainer,
  ExperienceWrapper,
  Display,
  DisplayTitle,
  ExperienceList,
  ListItem,
  ExperienceInfo,
  ExperienceTitle,
  ExperienceDate,
  ExperienceEmployer,
  ExperienceDescription,
} from "./style.js";
import { useEffect, useState } from "react";

const experiencesArray = [
  {
    position: "Desenvolvedor Front-End",
    time: "Abr/2022 - Atual",
    company: "Freelancer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
  },
  {
    position: "Agente Comercial",
    time: "Fev/2022 - Atual",
    company: "Banco do Brasil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
  },
  {
    position: "Estagiário de Obras",
    time: "Fev/2021 - Dez/2021",
    company: "MRV Engenharia",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
  },
  {
    position: "Estagiário de Operação de Trens",
    time: "Jun/2019 - Abr/2020",
    company: "MRS Logística",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
  },
  {
    position: "Diretor-Presidente",
    time: "Mai/2017 - Ago/2019",
    company: "Ideal Consultoria",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at mattis metus. Nullam sit amet mauris condimentum, volutpat augue in, mattis urna.",
  },
];

export const Experiences = ({ theme }) => {
  const [experienceShow, setExperienceShow] = useState(experiencesArray[0]);

  useEffect(() => {
    const experienceSection = document.getElementById("experience-list");
    const firstListItem = experienceSection.children[0];
    firstListItem.id = "selectedButton";
  }, []);

  const HandleChange = (e) => {
    const arraySize = experiencesArray.length;
    const list = e.target.parentNode;
    for (var i = 0; i < arraySize; i++) {
      list.children[i].id = "";
      if (e.target.innerText === experiencesArray[i].company) {
        setExperienceShow(experiencesArray[i]);
        e.target.id = "selectedButton";
      }
    }
  };

  return (
    <ExperienceContainer theme={theme} id="experiences">
      <ExperienceWrapper>
        <DisplayTitle theme={theme}>Experiência</DisplayTitle>

        <Display>
          <ExperienceList id="experience-list">
            {experiencesArray.map((item) => {
              return (
                <ListItem
                  key={item.company}
                  theme={theme}
                  onClick={(e) => HandleChange(e)}
                >
                  {item.company}
                </ListItem>
              );
            })}
          </ExperienceList>

          <ExperienceInfo>
            <ExperienceTitle theme={theme}>
              {experienceShow.position}
            </ExperienceTitle>
            <ExperienceDate theme={theme}>{experienceShow.time}</ExperienceDate>
            <ExperienceEmployer theme={theme}>
              {experienceShow.company}
            </ExperienceEmployer>
            <ExperienceDescription theme={theme}>
              {experienceShow.description}
            </ExperienceDescription>
          </ExperienceInfo>
        </Display>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};
