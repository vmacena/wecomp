import styled from "styled-components";
import { mq } from "@/utils/responsive/breakpoints";

export const CardContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Tag = styled.span`
  background: #007bff;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 120px;

  img {
    width: 80px;
    align-self: flex-end;
  }

  h3 {
    font-size: 1.4rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    min-height: 60px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;

export const Button = styled.a`
  background: #28a745;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    background: #218838;
  }

  ${mq({
    fontSize: ["0.9rem", "0.8rem"],
    padding: ["10px 15px", "8px 10px"],
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