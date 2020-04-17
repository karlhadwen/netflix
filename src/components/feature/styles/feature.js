import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 0;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 3.125rem;
  font-weight: 500;
  margin: auto;

  @media (min-width: 950px) {
    font-size: 4rem;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.625rem;
  font-weight: norma;
  margin: 1rem auto;
`;
