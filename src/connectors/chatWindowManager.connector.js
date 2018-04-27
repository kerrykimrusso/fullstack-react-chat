import { connect } from 'react-redux';
import ChatWindowManager from '../views/chatWindowManager';

const mapStateToProps = (state, ownProps) => ({
  openThreads: state.openThreads,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindowManager);