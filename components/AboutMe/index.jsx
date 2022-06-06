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
  {
    name: "whatsapp",
    icon: "/images/social_media/whatsapp.svg",
    alt: "logo do whatsapp",
    url: "https://wa.me/5531997201454",
  },
];

export const AboutMe = ({ theme }) => {
  return (
    <AboutMeContainer theme={theme} id="#sobremim">
      <AboutMeWrapper>
        <AboutMeImg
          theme={theme}
          src="/images/foto.jpg"
          alt="selfie de Raul Monteiro"
        />
        <div>
          <AboutMeTitle theme={theme}>Sobre mim</AboutMeTitle>
          <AboutMeLocation theme={theme}>
            Mogi Guaçu - SP, Brasil
          </AboutMeLocation>
          <AboutMeDescription theme={theme}>
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
              theme={theme}
              link="https://drive.google.com/u/0/uc?id=1eWwGGa6NPZoNQOF-icyYkI2cq-ynAG88&export=download"
              download
              borderColor1="#D24074"
              borderColor2="#6518B4"
            />
            <StyledButton
              title="E-mail"
              imgSrc="/images/mail.svg"
              imgAlt="Carta de correio"
              theme={theme}
              link="mailto:raulbtmonteiro@gmail.com"
              borderColor1="#9358F7"
              borderColor2="#10D7E2"
            />
          </AboutMeButtons>
        </div>
      </AboutMeWrapper>
    </AboutMeContainer>
  );
};
