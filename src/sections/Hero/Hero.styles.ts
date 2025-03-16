import styled from "styled-components";
import { mq } from "@/utils/responsive/breakpoints";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: var(--green-1000);
  text-align: center;
  color: black;
  overflow-x: hidden;
  position: relative;

  ${mq({
    padding: ["0", "50px 20px"],
  })}
`;

export const Logo = styled.img`
  width: 450px;
  margin-bottom: 20px;

  ${mq({
    width: ["450px", "300px", "250px"],
    maxWidth: "90%",
  })}
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Montserrat", sans-serif;

  ${mq({
    fontSize: ["2.5rem", "2rem", "1.8rem"],
  })}
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 8px;

  ${mq({
    fontSize: ["1.2rem", "1rem", "0.9rem"],
  })}
`;

export const ArrowDown = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }
`;
