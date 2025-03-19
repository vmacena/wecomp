import Carousel from "@/components/Carousel";
import Section from "@/components/Section";
import { Title } from "@/components/Card/Card.styles";
import { programacaoConfig } from "@/assets/config/config";

const Schedule = () => {
    return (
      <Section>
        <Title>{programacaoConfig.title}</Title>
        <Carousel items={programacaoConfig.items} />
      </Section>
    );
  };
export default Schedule;
