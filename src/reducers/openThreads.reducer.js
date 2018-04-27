import { types as ChatActionTypes } from '../actions/chat.actions';

const initialState = [];

const reactions = {
  [ChatActionTypes.THREAD_OPENED](state, action) {
    const { id } = action.payload;
    return state.includes(id) ? state : [...state, id];
  },
  [ChatActionTypes.THREAD_CLOSED](state, action) {
    const { id } = action.payload;
    return state.filter(thread => thread.id !== id);
  },
};

const openThreadsReducer = (state = initialState, action) => {
  const { type } = action;
  return (type in reactions) ? 
    reactions[type](state, action) : 
    state;
};

export default openThreadsReducer;