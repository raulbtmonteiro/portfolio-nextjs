import { useEffect, useRef, useState } from "react";
import { ThemeProvider, useTheme } from "styled-components";
import {
  ExperienceContainer,
  ExperienceWrapper,
  Display,
  DisplayTitle,
  ExperienceList,
  ListItem,
  ExperienceInfo,
  ExperienceTitle,
  ExperienceTitleWrapper,
  ExperienceDate,
  ExperienceEmployer,
  ExperienceDescription,
} from "./styles.js";

export const Experiences = ({ data }) => {
  const [experienceShow, setExperienceShow] = useState(data[0]);
  const experienceListRef = useRef();
  const theme = useTheme();

  useEffect(() => {
    experienceListRef.current.children[0].id = "selectedButton";
  }, []);

  const handleChange = (e) => {
    for (let i = 0; i < data.length; i++) {
      experienceListRef.current.children[i].id = "";
      if (e.target.innerText === data[i].company) {
        setExperienceShow(data[i]);
        e.target.id = "selectedButton";
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <ExperienceContainer id="experiences">
        <ExperienceWrapper>
          <DisplayTitle>Experiência</DisplayTitle>

          <Display>
            <ExperienceList ref={experienceListRef}>
              {data.map((item) => {
                return (
                  <ListItem key={item.company} onClick={(e) => handleChange(e)}>
                    {item.company}
                  </ListItem>
                );
              })}
            </ExperienceList>

            <ExperienceInfo>
              <ExperienceTitleWrapper>
                <ExperienceTitle>{experienceShow.position}</ExperienceTitle>
                <ExperienceDate>
                  {experienceShow.initialDate} - {experienceShow.finalDate}
                </ExperienceDate>
              </ExperienceTitleWrapper>
              <ExperienceEmployer>{experienceShow.company}</ExperienceEmployer>
              <ExperienceDescription>
                {experienceShow.description}
              </ExperienceDescription>
            </ExperienceInfo>
          </Display>
        </ExperienceWrapper>
      </ExperienceContainer>
    </ThemeProvider>
  );
};
