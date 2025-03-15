import styled from "styled-components";
import { mq } from "@/utils/responsive/breakpoints";

export const AboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  background: white;
  color: black;
  width: 100vw;
  min-height: 100vh;

  ${mq({
    padding: ["80px 20px", "60px 15px"],
  })}
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  background: black;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  
  ${mq({
    fontSize: ["2rem", "1.8rem"],
  })}
`;

export const Text = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 20px;

  ${mq({
    fontSize: ["1.2rem", "1rem"],
    padding: ["0 20px", "0 15px"],
  })}
`;

export const Button = styled.button`
  background: #0b660b;
  color: white;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #095609;
  }
`;

export const ArrowDown = styled.div`
  margin-top: 40px;
  font-size: 2rem;
  cursor: pointer;
  animation: bounce 1.5s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(10px); }
  }

  ${mq({
    fontSize: ["2rem", "1.5rem"],
  })}
`;
