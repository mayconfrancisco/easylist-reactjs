import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ListActions } from '../../store/ducks/lists';

import { ButtonPrimary, ButtonSecundary } from '../../styles/components';
import {
  Container, Title, ListItems, Form,
} from './styles';

class List extends React.Component {
  static propTypes = {
    list: PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          name: PropTypes.string,
          isFinished: PropTypes.bool,
        }),
      ),
    }).isRequired,
    addItemRequest: PropTypes.func.isRequired,
    addItemFinishedRequest: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.textInputAddItem = React.createRef();
  }

  state = {
    formItemVisible: false,
    addItemInput: '',
  };

  handleAddItem = (e) => {
    e.preventDefault();
    const { formItemVisible } = this.state;
    this.setState(
      {
        formItemVisible: !formItemVisible,
      },
      () => this.textInputAddItem.current.focus(),
    );
  };

  handleAddItemSubmit = (e) => {
    e.preventDefault();
    const { addItemInput, formItemVisible } = this.state;
    const { list, addItemRequest } = this.props;
    addItemRequest({ name: addItemInput, listId: list._id });
    this.setState({ formItemVisible: !formItemVisible, addItemInput: '' });
  };

  handleItemFinished = (itemId, isFinished) => {
    const { addItemFinishedRequest, list } = this.props;
    addItemFinishedRequest({ id: itemId, listId: list._id, isFinished });
  };

  render() {
    const { list } = this.props;
    const { formItemVisible, addItemInput } = this.state;
    // teste para ver quais componentes/lista serao renderizadas
    console.log(`RENDER DO COMPONENTE ${list._id}`);
    return (
      <Container>
        <Title>
          <h2>{list.name}</h2>
        </Title>
        <ListItems>
          {list.items.map(item => (
            <li
              key={item._id}
              style={
                item.isFinished ? { textDecoration: 'line-through' } : { textDecoration: 'none' }
              }
              onClick={() => this.handleItemFinished(item._id, !item.isFinished)}
            >
              {item.name}
            </li>
          ))}
        </ListItems>
        <Form formAddItemVisible={formItemVisible}>
          <div className="formAddItem">
            <input
              type="text"
              ref={this.textInputAddItem}
              value={addItemInput}
              onChange={e => this.setState({ addItemInput: e.target.value })}
            />
            <div>
              <ButtonSecundary type="button" onClick={this.handleAddItem}>
                Cancelar
              </ButtonSecundary>
              <ButtonPrimary type="submit" onClick={this.handleAddItemSubmit}>
                Adicionar
              </ButtonPrimary>
            </div>
          </div>
          <div className="btAddItem">
            <ButtonPrimary type="button" onClick={this.handleAddItem}>
              Adicionar Item
            </ButtonPrimary>
          </div>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  // TODO: problema de arquitetura de informacao - estamos ouvindo todas as listas
  // dentro do componente de lista - isso provoca render desnecessário
  lists: state.lists,
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
