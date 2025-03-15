import { HeroContainer, Logo, Title, Subtitle, ArrowDown } from "./Hero.styles";
import { heroContent } from "@/assets/config/config";
import logo from "@/assets/images/logopreto.png";

const Hero = () => {
  return (
    <HeroContainer id="hero">
       <Logo src={logo} alt="Wecomp Logo" />
      <Title>{heroContent.title}</Title>
      <Subtitle>{heroContent.subtitle}</Subtitle>
      <ArrowDown>▼</ArrowDown>
    </HeroContainer>
  );
};

export default Hero;
