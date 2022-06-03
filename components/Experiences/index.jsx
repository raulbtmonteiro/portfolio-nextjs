import { dark } from "../../themes/dark";
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

const experiencesArray = [
  {
    position: "",
    time: "",
    company: "Digital House",
    description: "",
  },
  {
    position: "",
    time: "",
    company: "Código Fonte TV",
    description: "",
  },
  {
    position: "",
    time: "",
    company: "Zuplae",
    description: "",
  },
  {
    position: "",
    time: "",
    company: "ContWeb",
    description: "",
  },
];

export const Experiences = () => {
  return (
    <ExperienceContainer theme={dark}>
      <ExperienceWrapper>
        <DisplayTitle theme={dark}>Experiência</DisplayTitle>
        <Display>
          <ExperienceList>
            {experiencesArray.map((item) => {
              return (
                <ListItem key={item.company} theme={dark}>
                  {item.company}
                </ListItem>
              );
            })}
          </ExperienceList>
          <ExperienceInfo>
            <ExperienceTitle theme={dark}>
              Professor conteudista em Frontend
            </ExperienceTitle>
            <ExperienceDate theme={dark}>Nov 2021 - Atual</ExperienceDate>
            <ExperienceEmployer theme={dark}>Digital House</ExperienceEmployer>
            <ExperienceDescription theme={dark}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              eu purus risus. Ut rutrum sollicitudin purus in accumsan. Proin at
              mattis metus. Nullam sit amet mauris condimentum, volutpat augue
              in, mattis urna.
            </ExperienceDescription>
          </ExperienceInfo>
        </Display>
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};
