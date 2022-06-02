import { dark } from "../../themes/dark";
import {
  ExperiencesContainer,
  ExperinceWrapper,
  Display,
  DisplayTitle,
  ExperienceList,
  ExperienceInfo,
  ExperienceTitle,
  ExperienceDate,
  ExperienceEmployer,
  ExperienceDescription,
} from "./style.js";

export const Experiences = () => {
  return (
    <ExperiencesContainer theme={dark}>
      <ExperinceWrapper>
        <Display>
          <DisplayTitle>Experiência</DisplayTitle>
          <ExperienceList></ExperienceList>
        </Display>

        <ExperienceInfo>
          <ExperienceTitle></ExperienceTitle>
          <ExperienceDate></ExperienceDate>
          <ExperienceEmployer></ExperienceEmployer>
          <ExperienceDescription></ExperienceDescription>
        </ExperienceInfo>
      </ExperinceWrapper>
    </ExperiencesContainer>
  );
};
