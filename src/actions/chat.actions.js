export const types = Object.freeze({
  THREAD_CREATED: 'thread/THREAD_CREATED',
  THREAD_OPENED: 'thread/THREAD_OPENED',
  THREAD_CLOSED: 'thread/THREAD_CLOSED',
  MESSAGE_ADDED: 'thread/MESSAGE_ADDED',
  MESSAGE_DELETED: 'thread/MESSAGE_DELETED',
});

export const threadCreated = ({ id, participants, timestamp }) => ({
  type: types.THREAD_CREATED,
  payload: {
    id,
    participants,
    timestamp,
  },
});

export const threadOpened = (id) => ({
  type: types.THREAD_OPENED,
  payload: {
    id,
  },
});

export const threadClosed = (id) => ({
  type: types.THREAD_CLOSED,
  payload: {
    id,
  },
});

export const messageAdded = ({ threadId, id, senderId, content, timestamp }) => ({
  type: types.MESSAGE_ADDED,
  payload: {
    threadId,
    id,
    senderId,
    content,
    timestamp,
  },
});

export const messageDeleted = ({ threadId, id }) => ({
  type: types.MESSAGE_DELETED,
  payload: {
    threadId,
    id,
  },
})