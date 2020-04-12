import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
`;

export const Item = styled.div`
  display: flex;
  margin-right: 5px;

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Cta = styled.button`
  cursor: pointer;
  border: 0;
  background: url(${(props) => props.backgroundSrc});
  width: 305px;
  height: 172px;
  padding: 0;
  margin: 0;
`;
