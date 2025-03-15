import { ReactNode } from "react";
import { SectionContainer, ArrowDown } from "./Section.styles";
import { useScrollToNext } from "@/hooks/useScrollToNext";

type SectionProps = {
  children: ReactNode;
};

const Section = ({ children }: SectionProps) => {
  const { sectionRef, scrollToNextSection } = useScrollToNext();

  return (
    <SectionContainer ref={sectionRef}>
      {children}
      <ArrowDown onClick={scrollToNextSection}>▼</ArrowDown>
    </SectionContainer>
  );
};

export default Section;
