import { Title, Text, Button } from "./About.styles";
import { aboutContent } from "@/assets/config/config";
import Section from "@/components/Section/Section";

const About = () => {
  return (
    <Section>
      <Title>{aboutContent.title}</Title>
      <Text>{aboutContent.description}</Text>
      {aboutContent.buttonText && <Button>{aboutContent.buttonText}</Button>}
    </Section>
  );
};

export default About;
