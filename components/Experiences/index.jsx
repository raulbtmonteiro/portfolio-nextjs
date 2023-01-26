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

export const Experiences = () => {
  const [experienceShow, setExperienceShow] = useState(experiencesArray[0]);
  const experienceListRef = useRef();
  const theme = useTheme();

  useEffect(() => {
    experienceListRef.current.children[0].id = "selectedButton";
  }, []);

  const handleChange = (e) => {
    for (let i = 0; i < experiencesArray.length; i++) {
      experienceListRef.current.children[i].id = "";
      if (e.target.innerText === experiencesArray[i].company) {
        setExperienceShow(experiencesArray[i]);
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
              {experiencesArray.map((item) => {
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
                <ExperienceDate>{experienceShow.time}</ExperienceDate>
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

const experiencesArray = [
  {
    position: "Estagiário Desenvolvedor Front-End",
    time: "Set/2022 - Dias Atuais",
    company: "Cia Hering",
    description:
      "Desenvolvimento e manutenção dos três e-commerces da cia: Hering, Hering Outlet e Dzarm. Trabalho com as seguintes stacks: React, TypeScript, CSS, VTEX",
  },
  {
    position: "Agente Comercial",
    time: "Fev/2022 - Ago/2022",
    company: "Banco do Brasil",
    description:
      "Atendimento ao público, tanto nas SAA quanto nas mesas de atendimento. Segmentação e Prospecção de clientes. Trabalho direcionado com os indicadores da agência. Demandas administrativas internas.Cursos e capacitações internas via Unibb, universidade corporativa da instituição, e Alura",
  },
  {
    position: "Estagiário de Obras",
    time: "Fev/2021 - Dez/2021",
    company: "MRV Engenharia",
    description:
      "Responsável pelo acompanhamento da execução dos serviços controlados e adequação às normas de qualidade. Gestão da mão de obra e acompanhamento de cronograma. Responsável pelas medições de mão de obra própria e de empreiteiro. Planejamento de pedidos e material em estoque.",
  },
  {
    position: "Estagiário de Operação de Trens",
    time: "Jun/2019 - Abr/2020",
    company: "MRS Logística",
    description:
      "Atuação na Gerência de Operação de Trens. Responsável pela escala e logística das equipes de maquinistas. Acompanhamento dos indicadores da gerência, sendo o responsável pela atualização e controle diário destes. Análise e controle dos dados via planilhas no Excel.",
  },
  {
    position: "Diretor-Presidente",
    time: "Mai/2017 - Ago/2019",
    company: "Ideal Consultoria",
    description:
      "A Ideal Consultoria é a empresa júnior do curso de engenharia civil da UFSJ. Atuação como assessor nas Diretorias de Negócios e, posteriormente, de Gestão de Pessoas. Em 2018 guiei a empresa como Diretor-Presidente na busca de atingir nossas metas do planejamento estratégico.",
  },
];
