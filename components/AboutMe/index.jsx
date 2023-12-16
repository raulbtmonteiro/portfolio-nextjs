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

export const AboutMe = ({ data }) => {
  return (
    <AboutMeContainer id="#aboutme">
      <AboutMeWrapper>
        <AboutMeImg
          src={data.profile_image.url}
          alt={data.profile_image.alt}
          loading="lazy"
        />
        <div>
          <AboutMeTitle>{data.title[0].text}</AboutMeTitle>
          <AboutMeLocation>{data.location[0].text}</AboutMeLocation>
          <AboutMeDescription>{data.description[0].text}</AboutMeDescription>
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
              link={data.curriculo.url}
              download
              borderColor1="#D24074"
              borderColor2="#6518B4"
            />
            <LinkButton
              title="E-mail"
              imgSrc="/images/mail.svg"
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
