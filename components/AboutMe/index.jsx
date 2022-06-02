import { dark } from "../../themes/dark";
import {
  AboutMeContainer,
  AboutMeWrapper,
  AboutMeImg,
  AboutMeInfo,
  AboutMeTitle,
  AboutMeLocation,
  AboutMeDescription,
  SocialMediaList,
} from "./style";

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
        <AboutMeImg src="/images/foto.jpg" alt="selfie de Raul Monteiro" />
        <AboutMeInfo>
          <AboutMeTitle>Sobre mim</AboutMeTitle>
          <AboutMeLocation>Mogi Guaçu - SP, Brasil</AboutMeLocation>
          <AboutMeDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            egestas dui. Nullam finibus aliquam enim quis faucibus. Aenean ac
            commodo dolor, nec bibendum velit.
          </AboutMeDescription>
          <SocialMediaList>
            {socialMediaArray.map((item) => {
              <img src={item.icon} alt={item.alt} />;
            })}
          </SocialMediaList>
        </AboutMeInfo>
      </AboutMeWrapper>
    </AboutMeContainer>
  );
};
