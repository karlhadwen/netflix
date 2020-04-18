import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  min-width: 450px;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 100%;
  height: 70px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
`;
