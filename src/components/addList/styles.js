import styled from 'styled-components';

import { ButtonSecundary, ButtonPrimary } from '../../styles/components';

export const Container = styled.div`
  width: 256px;
  min-width: 256px;
  padding: 16px;

  ${ButtonPrimary}, ${ButtonSecundary} {
    color: #fff;
  }
  ${ButtonPrimary}:hover, ${ButtonSecundary}:hover {
    color: #aaa;
  }
`;

export const Form = styled.form`
  .formAddList {
    display: ${props => (!props.formAddListVisible ? 'none' : 'block')};
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

  .btAddList {
    text-align: center;
    display: ${props => (props.formAddListVisible ? 'none' : 'block')};
  }
`;
