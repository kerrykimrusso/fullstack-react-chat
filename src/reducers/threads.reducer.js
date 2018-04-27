import { types as ChatActionTypes } from '../actions/chat.actions';
import messagesReducer from './messages.reducer';

const initialState = {
  byId: {},
  ordered: [],
};

const reactions = {
  [ChatActionTypes.THREAD_CREATED](state, action) {
    const { id, participants, timestamp } = action.payload;
    return {
      byId: {
        ...state.byId,
        [id]: {
          id,
          participants,
          messages: messagesReducer(undefined, action),
          timestamp,
        }
      },
      ordered: [...state.ordered, id],
    };
  },
  [ChatActionTypes.MESSAGE_ADDED](state, action) {
    const { threadId } = action.payload;
    return {
      byId: {
        ...state.byId,
        [threadId]: {
          ...state.byId[threadId],
          messages: messagesReducer(state.byId[threadId].messages, action),
        }
      },
      ordered: state.ordered,
    }
  },
  [ChatActionTypes.MESSAGE_DELETED](state, action) {
    const { threadId } = action.payload;
    return {
      byId: {
        ...state.byId,
        [threadId]: {
          ...state.byId[threadId],
          messages: messagesReducer(state.byId[threadId].messages, action),
        }
      },
      ordered: state.ordered,
    }
  },
};

const threadReducer = (state = initialState, action) => {
  const { type } = action;
  return (type in reactions) ? 
    reactions[type](state, action) : 
    state;
};

export default threadReducer;