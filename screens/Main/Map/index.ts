import MapContainer from './MapContainer';
import { connect } from 'react-redux';
import { searchRooms } from '../../../redux/roomSlice';

const mapStateToProps = (state) => {
  return {
    rooms: state.roomReducer.rooms,
    token: state.userReducer.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchRooms: (rooms) => dispatch(searchRooms(rooms)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
