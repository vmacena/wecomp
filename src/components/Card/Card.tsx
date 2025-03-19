import { CardContainer, CardHeader, CardBody, Tag, Button, CardFooter } from "./Card.styles";
import { CardData } from "@/assets/config/config.types";

import calendarIcon from "@/assets/images/empresaGenerica.svg";
import pythonIcon from "@/assets/images/empresaGenerica.svg";
import javaIcon from "@/assets/images/empresaGenerica.svg";
import minicursoLogo from "@/assets/images/empresaGenerica.svg";
import marlabsLogo from "@/assets/images/empresaGenerica.svg";

const MIN_DESC_LENGTH = 100;
const MAX_DESC_LENGTH = 180;

const formatDescription = (text: string): string => {
  if (text.length < MIN_DESC_LENGTH) {
    return text.padEnd(MIN_DESC_LENGTH, " ");
  }
  if (text.length > MAX_DESC_LENGTH) {
    return text.slice(0, MAX_DESC_LENGTH) + "...";
  }
  return text;
};

// Criamos um mapeamento de ícones e logos para garantir importação
const iconMap: Record<string, string> = {
  calendar: calendarIcon,
  python: pythonIcon,
  java: javaIcon,
};

const logoMap: Record<string, string> = {
  minicurso: minicursoLogo,
  marlabs: marlabsLogo,
};

const Card = ({ title, description, icon, category, vagas, buttonLabel, buttonLink, companyLogo }: CardData) => {
  return (
    <CardContainer>
      <CardHeader>
        <img src={iconMap[icon] || calendarIcon} alt="Ícone" />
        <Tag>{category}</Tag>
      </CardHeader>
      <CardBody>
        <h3>{title}</h3>
        {companyLogo && <img src={logoMap[companyLogo] || minicursoLogo} alt="Logo da Empresa" />}
        <p>{formatDescription(description)}</p>
      </CardBody>
      <CardFooter>
        <span>Vagas: {vagas}</span>
        <Button href={buttonLink}>{buttonLabel}</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
