import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 70px 45px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
  margin-left: 70px;
  margin-right: 70px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
  margin-left: 72px;
  margin-right: 72px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
