import styled from "styled-components";

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
`;
