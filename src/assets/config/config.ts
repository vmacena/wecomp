import { SponsorSection, AboutSectionContent, OrganizationSectionContent, SectionConfig, CardData } from "./config.types";
  
  export const heroContent = {
    title: "VI Semana da Computação",
    subtitle: "02 a 06 de setembro",
  };
  
  export const aboutContent: AboutSectionContent = {
    title: "Sobre a WECOMP",
    description: `
      A Wecomp é a semana da computação do IFSP São Carlos, que neste ano realizará sua quinta edição.
      O objetivo do evento é proporcionar uma maior interação entre os estudantes, o mercado de tecnologia 
      e a cidade de São Carlos. Ao longo de cinco dias de evento, serão realizados diversos minicursos, talks 
      e processos seletivos, que visam reduzir a distância entre a teoria e a prática, ensinar tecnologias novas 
      e promover o ingresso dos participantes no mercado de trabalho.
    `,
    buttonText: "Ver mais",
  };

  export const sponsorsContent: SponsorSection = {
    title: "Apoiadores",
  };

  export const organizationContent: OrganizationSectionContent = {
    title: "Realização & Organização"
  };
  
  // Cards Data
  export const programacaoConfig: SectionConfig = {
    title: "Programação",
    items: [
      {
        title: "IFSP Lab C147 | 3 de Setembro | 19h30 às 20h00",
        description: "Lorem ipsum dolor sit amet consectetur...",
        icon: "/assets/icons/calendar.svg",
        category: "Minicurso",
        vagas: 30,
        buttonLabel: "Ver biografia",
        buttonLink: "#",
        companyLogo: "/assets/logos/minicurso.png",
      },
      {
        title: "Python para Iniciantes",
        description: "Aprenda os conceitos básicos de Python.",
        icon: "/assets/icons/python.svg",
        category: "Workshop",
        vagas: 20,
        buttonLabel: "Inscrever-se",
        buttonLink: "#",
        companyLogo: "/assets/logos/python.png",
      },
    ],
  };
  
  export const destaquesConfig: SectionConfig = {
    title: "Destaques",
    items: [
      {
        title: "Back End Java with Spring Boot",
        description: "Lorem ipsum dolor sit amet...",
        icon: "/assets/icons/java.svg",
        category: "Estágio",
        vagas: 30,
        buttonLabel: "Inscrever-se",
        buttonLink: "#",
        companyLogo: "/assets/logos/marlabs.png",
      },
    ],
  };