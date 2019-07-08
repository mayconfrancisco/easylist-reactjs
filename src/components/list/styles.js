import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 256px;
  min-width: 256px;
  height: 400px;
  max-width: 256px;
  background-color: #fff;
  border-radius: 5px;
  padding: 16px 16px 0 16px;
  margin: 8px;
`;

export const Title = styled.div`
  h2 {
    color: #222;
    font-weight: 500;
    font-size: 24px;
  }
`;

export const ListItems = styled.ul`
  flex: 1;
  list-style: none;
  padding: 16px;
  color: #676767;
  font-weight: lighter;
  font-size: 14px;
  overflow-y: auto;
  li {
    padding-bottom: 16px;
    height: auto;
    word-wrap: break-word;
    white-space: normal;
  }
`;

export const Form = styled.form`
  .formAddItem {
    display: ${props => (!props.formAddItemVisible ? 'none' : 'block')};
    input {
      width: 100%;
      font-size: 14px;
      padding: 8px;
      color: #333;
    }

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  .btAddItem {
    text-align: center;
    display: ${props => (props.formAddItemVisible ? 'none' : 'block')};
  }
`;
