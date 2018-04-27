import { combineReducers } from 'redux';
import threadsReducer from './threads.reducer';
import usersReducer from './users.reducer';
import openThreadsReducer from './openThreads.reducer';

export default combineReducers({
  users: usersReducer,
  threads: threadsReducer,
  openThreads: openThreadsReducer,
})