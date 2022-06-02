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

export const Experiences = () => {
  return (
    <ExperienceContainer theme={dark}>
      <ExperienceWrapper>
        <DisplayTitle theme={dark}>Experiência</DisplayTitle>
        <Display>
          <ExperienceList>
            <ListItem theme={dark}>Digital House</ListItem>
            <ListItem theme={dark}>Código Fonte TV</ListItem>
            <ListItem theme={dark}>Zuplae</ListItem>
            <ListItem theme={dark}>ContWeb</ListItem>
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
