import styled from 'styled-components';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  background: url(../images/misc/home-bg.jpg) top left / cover no-repeat;
`;

export const Container = styled.section`
  display: flex;
  margin: 0 3.5rem;
  height: 4rem;
  padding: 23px 0;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #e50914;
  width: 84px;
  height: 34px;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 7px 17px;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }
`;

export const Logo = styled.img`
  height: 32px;
  width: 108px;

  @media (min-width: 1449px) {
    height: 36px;
    width: 134px;
  }
`;
