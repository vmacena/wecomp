import Section from "@/components/Section";
import {Title, LogosContainer } from "./Organization.styles";
import { organizationContent } from "@/assets/config/config";
import logo1 from "@/assets/images/empresaGenerica.svg";

const Organization = () => {
  return (
    <Section>
      <Title>{organizationContent.title}</Title>
      <LogosContainer>
        <img src={logo1} alt="Instituto Federal São Carlos" />
        <img src={logo1} alt="Curso de ADS" />
      </LogosContainer>
    </Section>
  );
};

export default Organization;
