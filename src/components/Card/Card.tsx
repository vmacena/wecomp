import { 
    CardContainer, 
    CardHeader, 
    CardBody, 
    Tag, 
    Button, 
    CardFooter 
} from "./Card.styles";

import { CardData } from "@/assets/config/config.types";

const Card = ({ title, description, icon, category, vagas, buttonLabel, buttonLink, companyLogo }: CardData) => {
  return (
    <CardContainer>
      <CardHeader>
        <img src={icon} alt="Ícone" />
        <Tag>{category}</Tag>
      </CardHeader>
      <CardBody>
        <h3>{title}</h3>
        {companyLogo && <img src={companyLogo} alt="Logo da Empresa" />}
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <span>Vagas: {vagas}</span>
        <Button href={buttonLink}>{buttonLabel}</Button>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
