import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import ThreadList from '../views/threadList';
import { threadCreated, threadOpened } from '../actions/chat.actions';

const mapStateToProps = (state) => ({
  threads: state.threads.ordered.map(threadId => state.threads.byId[threadId]),
});

const mapDispatchToProps = (dispatch) => ({
  onThreadClicked: (id) => {
    dispatch(threadOpened(id));
  },
  onNewThreadBtnClicked: () => {
    const id = uuid();
    dispatch(threadCreated({
      id,
      participants: [],
      timestamp: Date.now(),
    }));
    dispatch(threadOpened(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ThreadList);