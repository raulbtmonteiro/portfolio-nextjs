import {
  AboutMeContainer,
  AboutMeWrapper,
  AboutMeImg,
  AboutMeTitle,
  AboutMeLocation,
  AboutMeDescription,
  SocialMediaList,
  AboutMeButtons,
} from "./styles";
import { LinkButton } from "../LinkButton";
import { ThemeProvider, useTheme } from "styled-components";

const socialMediaArray = [
  {
    name: "whatsapp",
    icon: "/images/social_media/whatsapp.svg",
    alt: "Logo do whatsapp.",
    url: "https://wa.me/5531997201454",
  },
  {
    name: "instagram",
    icon: "/images/social_media/instagram.svg",
    alt: "Logo do instagram.",
    url: "https://www.instagram.com/raulbtm/",
  },
  {
    name: "facebook",
    icon: "/images/social_media/facebook.svg",
    alt: "Logo do facebook.",
    url: "https://www.facebook.com/monteirorbt/",
  },
];

export const AboutMe = () => {
  const theme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <AboutMeContainer id="#aboutme">
        <AboutMeWrapper>
          <AboutMeImg src="/images/foto.jpg" alt="Selfie de Raul Monteiro." loading="lazy"/>
          <div>
            <AboutMeTitle>Sobre mim</AboutMeTitle>
            <AboutMeLocation>Campinas, São Paulo</AboutMeLocation>
            <AboutMeDescription>
              Mineiro de Beagá morando em terras paulistas. Desenvolvedor de
              aplicações web, em especial no front-end. Principais stacks: HTML,
              CSS, JavaScrip, React, styled-somponents. Abaixo estão as minhas redes sociais para contato.
            </AboutMeDescription>
            <SocialMediaList>
              {socialMediaArray.map((item) => {
                return (
                  <a href={item.url} key={item.name} target="_blank">
                    <img src={item.icon} alt={item.alt} />
                  </a>
                );
              })}
            </SocialMediaList>
            <AboutMeButtons>
              <LinkButton
                title="Currículo"
                imgSrc="/images/download-cloud.svg"
                imgAlt="Download da nuvem."
                link="https://drive.google.com/u/4/uc?id=1CUrS9Ki99NwmrdI4R8Je31_ShRAYgKkC&export=download"
                download
                borderColor1="#D24074"
                borderColor2="#6518B4"
              />
              <LinkButton
                title="E-mail"
                imgSrc="/images/mail.svg"
                imgAlt="Carta de correio."
                link="mailto:raulbtmonteiro@gmail.com"
                borderColor1="#9358F7"
                borderColor2="#10D7E2"
              />
            </AboutMeButtons>
          </div>
        </AboutMeWrapper>
      </AboutMeContainer>
    </ThemeProvider>
  );
};
