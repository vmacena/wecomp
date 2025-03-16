import Section from "@/components/Section";
import { CarouselWrapper, CarouselTrack, SponsorLogo } from "./Sponsors.styles";
import { Title } from "@/components/Section/Section.styles";
import { sponsorsContent } from "@/assets/config/config";

import logo1 from "@/assets/images/empresaGenerica.svg";
import logo2 from "@/assets/images/empresaGenerica.svg";
import logo3 from "@/assets/images/empresaGenerica.svg";

const Sponsors = () => {
  return (
    <Section>
    <Title>{sponsorsContent.title}</Title>
    <CarouselWrapper>
        <CarouselTrack speed="20s">
          <SponsorLogo src={logo1} alt="Empresa 1" />
          <SponsorLogo src={logo2} alt="Empresa 2" />
          <SponsorLogo src={logo3} alt="Empresa 3" />
        </CarouselTrack>
        <CarouselTrack speed="25s">
          <SponsorLogo src={logo3} alt="Empresa 3" />
          <SponsorLogo src={logo2} alt="Empresa 2" />
          <SponsorLogo src={logo1} alt="Empresa 1" />
        </CarouselTrack>
      </CarouselWrapper>
    </Section>
  );
};

export default Sponsors;
