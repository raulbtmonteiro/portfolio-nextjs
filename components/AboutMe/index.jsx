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
    name: "twitter",
    icon: "/images/social_media/twitter.svg",
    alt: "Logo do twitter.",
    url: "https://twitter.com",
  },
  {
    name: "youtube",
    icon: "/images/social_media/youtube.svg",
    alt: "Logo do youtube.",
    url: "https://www.youtube.com/user/raulbtmonteiro/",
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
          <AboutMeImg src="/images/foto.jpg" alt="Selfie de Raul Monteiro." />
          <div>
            <AboutMeTitle>Sobre mim</AboutMeTitle>
            <AboutMeLocation>Campinas, São Paulo</AboutMeLocation>
            <AboutMeDescription>
              Mineiro de Beagá morando em terras paulistas. Desenvolvedor de
              aplicações web, em especial no front-end. Principais stacks: HTML,
              CSS, JavaScrip, React, Styled-Components. Sinta-se à vontade para
              me contatar, não recuso um bom pão de queijo com um cafézin.
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
