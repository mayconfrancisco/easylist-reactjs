import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ListsActions } from '../../store/ducks/lists';

import { ButtonPrimary, ButtonSecundary } from '../../styles/components';
import { Container, Form } from './styles';

class AddList extends React.Component {
  static propTypes = {
    addListsRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.textInputAddList = React.createRef();
  }

  state = {
    formAddListVisible: false,
    listNameInput: '',
  };

  handleAddList = (e) => {
    e.preventDefault();
    const { formAddListVisible } = this.state;
    this.setState(
      {
        formAddListVisible: !formAddListVisible,
      },
      () => this.textInputAddList.current.focus(),
    );
  };

  handleAddListSubmit = (e) => {
    e.preventDefault();
    const { listNameInput, formAddListVisible } = this.state;
    const { addListsRequest } = this.props;
    addListsRequest(listNameInput);
    this.setState({ formAddListVisible: !formAddListVisible, listNameInput: '' });
  };

  render() {
    const { formAddListVisible, listNameInput } = this.state;
    return (
      <Container>
        <Form formAddListVisible={formAddListVisible}>
          <div className="formAddList">
            <input
              type="text"
              id="txtin_addlist"
              ref={this.textInputAddList}
              value={listNameInput}
              onChange={e => this.setState({ listNameInput: e.target.value })}
            />
            <div>
              <ButtonSecundary type="button" onClick={this.handleAddList}>
                Cancelar
              </ButtonSecundary>
              <ButtonPrimary type="submit" onClick={this.handleAddListSubmit}>
                Adicionar
              </ButtonPrimary>
            </div>
          </div>
          <div className="btAddList">
            <ButtonPrimary type="button" onClick={this.handleAddList}>
              Adicionar Lista
            </ButtonPrimary>
          </div>
        </Form>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(ListsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(AddList);
