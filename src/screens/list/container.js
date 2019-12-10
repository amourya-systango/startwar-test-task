import React from 'react';
import ListComponent from './component';
import { connect } from 'react-redux';
import * as listActions from '../../actions/list';

class ListContainer extends React.PureComponent {

  // Loading vehicle data into redux state
  componentDidMount(){
    this.props.getList('vehicles');
  }

  render() {
    return (
      <ListComponent {...this.props} />
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.listReducer.list
});

const mapDispatchToProps = (dispatch) => ({
  getList: (list) => {
    return dispatch(listActions.list(list));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListContainer);
