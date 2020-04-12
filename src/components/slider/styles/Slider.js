import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3.5rem;
  margin-bottom: 50px;

  &:first-of-type {
    margin-top: 50px;
  }
`;

export const Title = styled.p`
  font-size: 1.5rem;
  color: #e5e5e5;
  font-weight: bold;
  margin-top: 0;
`;
