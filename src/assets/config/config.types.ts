
// Sections
export type AboutSectionContent = {
    title: string;
    description: string;
    buttonText?: string;
  };

export type OrganizationSectionContent = {
    title: string;
};

export type SponsorSection = {
  title: string;
}


// Components
export type CardData = {
  title: string;
  description: string;
  icon: string;
  category: string;
  vagas: number;
  buttonLabel: string;
  buttonLink: string;
  companyLogo?: string;
};

export type SectionConfig = {
  title: string;
  items: CardData[];
};

