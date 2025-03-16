import styled, { keyframes } from "styled-components";

const scrollAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CarouselTrack = styled.div<{ speed?: string }>`
  display: flex;
  white-space: nowrap;
  width: max-content;
  animation: ${scrollAnimation} ${({ speed }) => speed || "20s"} linear infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

export const SponsorLogo = styled.img`
  width: 200px;
  height: 100px;
  margin: 10px;
  border-radius: 10px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 150px;
    height: 80px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 60px;
  }
`;
