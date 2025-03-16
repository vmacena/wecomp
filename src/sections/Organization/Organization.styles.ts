import styled from "styled-components";
import { mq } from "@/utils/responsive/breakpoints";


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

export const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  flex-wrap: wrap;

  img {
    max-width: 250px;
    height: auto;
  }

  @media (max-width: 768px) {
    gap: 40px;
    img {
      max-width: 200px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    img {
      max-width: 150px;
    }
  }
`;
