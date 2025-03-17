import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  width: 100%;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

export const NavigationButton = styled.button`
  background: #000;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 50%;
  transition: background 0.3s;

  &:hover {
    background: #333;
  }
`;
