import Carousel from "@/components/Carousel";
import Section from "@/components/Section";
import { Title } from "@/components/Card/Card.styles";
import { destaquesConfig } from "@/assets/config/config";

const Destaques = () => {
  return (
    <Section>
      <Title>{destaquesConfig.title}</Title>
      <Carousel items={destaquesConfig.items} />
    </Section>
  );
};

export default Destaques;
