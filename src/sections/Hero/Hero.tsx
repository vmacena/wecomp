import { HeroContainer, Logo, Title, Subtitle, ArrowDown } from "./Hero.styles";
import { heroContent } from "@/assets/config/config";
import logo from "@/assets/images/logopreto.png";
import { useScrollToNext } from "@/hooks/useScrollToNext";


type SectionProps = {
  children: React.ReactNode;
};
const Hero = ({}: SectionProps) => {
  const { sectionRef, scrollToNextSection } = useScrollToNext();
  return (
    <HeroContainer ref={sectionRef}>
      <Logo src={logo} alt="Wecomp Logo" />
      <Title>{heroContent.title}</Title>
      <Subtitle>{heroContent.subtitle}</Subtitle>
      <ArrowDown onClick={scrollToNextSection}>▼</ArrowDown>
    </HeroContainer>
  );
};

export default Hero;
