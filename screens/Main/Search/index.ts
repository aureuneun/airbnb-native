import { connect } from 'react-redux';
import SearchContainer from './SearchContainer';

const mapStateToProps = (state) => {
  return { token: state.userReducer.token };
};

export default connect(mapStateToProps)(SearchContainer);
