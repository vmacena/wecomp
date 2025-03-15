import { AboutContainer, Title, Text, Button, ArrowDown } from "./About.styles";
import { aboutContent } from "@/assets/config/config";

const About = () => {
  return (
    <AboutContainer id="about">
      <Title>{aboutContent.title}</Title>
      <Text>{aboutContent.description}</Text>
      {aboutContent.buttonText && <Button>{aboutContent.buttonText}</Button>}
      <ArrowDown>▼</ArrowDown>
    </AboutContainer>
  );
};

export default About;
