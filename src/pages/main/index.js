import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ListsActions } from '../../store/ducks/lists';

import { Header, Container } from './styles';
import logo from '../../assets/images/logo-branca-fundotransparente.png';
import List from '../../components/list';
import AddList from '../../components/addList';

class Main extends React.Component {
  static propTypes = {
    lists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string,
          name: PropTypes.string,
          items: PropTypes.arrayOf(
            PropTypes.shape({
              _id: PropTypes.string,
              name: PropTypes.string,
              isFinished: PropTypes.bool,
            }),
          ),
        }),
      ),
    }).isRequired,
    getListsRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getListsRequest } = this.props;
    getListsRequest();
  }

  render() {
    const { lists } = this.props;
    return (
      <React.Fragment>
        <Header>
          <img src={logo} alt="Logo do Aplicativo EasyList" />
          <h1>EasyList</h1>
        </Header>
        <Container>
          <div>
            {lists.data.map(l => (
              <List key={l._id} list={l} />
            ))}

            <AddList />
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists,
});

const mapDispatchToProps = dispatch => bindActionCreators(ListsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
