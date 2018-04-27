import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import { messageAdded } from '../actions/chat.actions';
import ChatWindow from '../views/chatWindow';

const mapStateToProps = (state, ownProps) => {
  const thread = state.threads.byId[ownProps.threadId];
  return {
    participants: thread.participants,
    messages: thread.messages.ordered.map(msgId => {
      const msg = thread.messages.byId[msgId];
      msg.sender = state.users.byId[msg.senderId];
      return msg;
    }),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSendMessage: (content) => {
    dispatch(messageAdded({
      threadId: ownProps.threadId,
      id: uuid(),
      senderId: 'me',
      content,
      timestamp: Date.now(),
    }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatWindow);