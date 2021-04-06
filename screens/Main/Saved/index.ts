import SavedContainer from './SavedContainer';
import { connect } from 'react-redux';
import { getFavs } from '../../../redux/userSlice';

const mapStateToProps = (state) => {
  return { rooms: state.roomReducer.favs };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFavs: () => dispatch(getFavs()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SavedContainer);
