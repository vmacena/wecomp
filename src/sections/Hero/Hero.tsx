import { HeroContainer, Logo, Title, Subtitle, ArrowDown } from "./Hero.styles";
import logo from "@/assets/images/logopreto.png";

const Hero = () => {
  return (
    <HeroContainer>
      <Logo src={logo} alt="Wecomp Logo" />
      <Title>VI Semana da Computação</Title>
      <Subtitle>02 a 06 de setembro</Subtitle>
      <ArrowDown>▼</ArrowDown>
    </HeroContainer>
  );
};

export default Hero;
