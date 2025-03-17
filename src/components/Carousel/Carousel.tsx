import { useState } from "react";
import { CarouselContainer, CardWrapper, NavigationButton } from "./Carousel.styles";
import Card from "@/components/Card";
import { CardData } from "@/assets/config/config.types";

interface CarouselProps {
  items: CardData[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <CarouselContainer>
      <NavigationButton onClick={prevCard}>&lt;</NavigationButton>
      <CardWrapper>
        <Card {...items[currentIndex]} />
      </CardWrapper>
      <NavigationButton onClick={nextCard}>&gt;</NavigationButton>
    </CarouselContainer>
  );
};

export default Carousel;
