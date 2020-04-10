import styled from 'styled-components';

export const Container = styled.section`
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

export const Text = styled.p`
  font-size: 1.2rem;
  color: white;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 70px;
`;

export const Input = styled.input`
  min-width: 450px;
  height: 100%;
  border: 0;
  padding: 10px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  height: 100%;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 2rem;
  font-size: 1.625rem;
  border: 0;
`;
