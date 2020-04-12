import styled from 'styled-components';
import { Link as ReachRouterLink } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(../images/misc/home-bg.jpg) top left / cover no-repeat;
`;

export const Container = styled.section`
  display: flex;
  margin: 0 3.5rem;
  height: 4rem;
  padding: 18px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Link = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;
