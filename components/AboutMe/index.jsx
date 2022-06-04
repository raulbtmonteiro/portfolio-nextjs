import { dark } from "../../themes/dark";
import {
  AboutMeContainer,
  AboutMeWrapper,
  AboutMeImg,
  AboutMeTitle,
  AboutMeLocation,
  AboutMeDescription,
  SocialMediaList,
  AboutMeButtons,
} from "./style";
import StyledButton from "../StyledButton";

const socialMediaArray = [
  {
    name: "twitter",
    icon: "/images/social_media/twitter.svg",
    alt: "logo do twitter",
    url: "https://twitter.com/tortaraul",
  },
  {
    name: "youtube",
    icon: "/images/social_media/youtube.svg",
    alt: "logo do youtube",
    url: "https://www.youtube.com/user/raulbtmonteiro/",
  },
  {
    name: "instagram",
    icon: "/images/social_media/instagram.svg",
    alt: "logo do instagram",
    url: "https://www.instagram.com/raulbtm/",
  },
  {
    name: "facebook",
    icon: "/images/social_media/facebook.svg",
    alt: "logo do facebook",
    url: "https://www.facebook.com/monteirorbt/",
  },
];

export const AboutMe = () => {
  return (
    <AboutMeContainer theme={dark}>
      <AboutMeWrapper>
        <AboutMeImg
          theme={dark}
          src="/images/foto.jpg"
          alt="selfie de Raul Monteiro"
        />
        <div>
          <AboutMeTitle theme={dark}>Sobre mim</AboutMeTitle>
          <AboutMeLocation theme={dark}>
            Mogi Guaçu - SP, Brasil
          </AboutMeLocation>
          <AboutMeDescription theme={dark}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac
            commodo dolor, nec bibendum velit.
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
            <StyledButton
              title="Currículo"
              imgSrc="/images/download-cloud.svg"
              imgAlt="Download da nuvem"
              theme={dark}
            />
            <StyledButton
              title="E-mail"
              imgSrc="/images/mail.svg"
              imgAlt="Carta de correio"
              theme={dark}
            />
          </AboutMeButtons>
        </div>
      </AboutMeWrapper>
    </AboutMeContainer>
  );
};
