import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px;
  width: 100vw;
  min-height: 100vh;
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
`;
