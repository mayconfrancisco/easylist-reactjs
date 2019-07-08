import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px;

  h1 {
    color: #fff;
    font-size: 36px;
    padding-left: 16px;
  }

  img {
    width: 60px;
  }
`;

export const Container = styled.div`
  overflow: auto;
  overflow-y: hidden;
  white-space: nowrap;
  & > div {
    display: flex;
    flex-direction: row;
    padding: 8px;
    justify-content: center;
  }
`;
