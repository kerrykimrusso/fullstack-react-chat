import { types as ChatActionTypes } from '../actions/chat.actions';

const initialState = {
  byId: {},
  ordered: [],
};

const reactions = {
  [ChatActionTypes.MESSAGE_ADDED](state, action) {
    const { id, senderId, content, timestamp } = action.payload;
    return {
      byId: { 
        ...state.byId,
        [id]: {
          id,
          senderId,
          content,
          timestamp,
        },
      },
      ordered: [...state.ordered, id],
    };
  },

  [ChatActionTypes.MESSAGE_DELETED](state, { id, index }) {
    const newById = Object.assign({}, state.byId);
    delete newById[id];
    return {
      byId: newById,
      ordered: state.ordered.filter((msg, msgIndex) => msgIndex !== index),
    };
  }
};

const messagesReducer = (state = initialState, action) => {
  const { type } = action;
  return (type in reactions) ? 
    reactions[type](state, action) : 
    state;
};

export default messagesReducer;