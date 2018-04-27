const initialState = { 
  byId: {
    'me': { 
      id: 'me',
      name: 'Kerry',
    },
    'u1': { 
      id: 'u1',
      name: 'Jenny',
    },
    'u2': { 
      id: 'u2',
      name: 'Devin',
    },
    'u3': { 
      id: 'u3',
      name: 'Amanda',
    },
  },
};

const reactions = {
};

const usersReducer = (state = initialState, action) => {
  const { type } = action;
  return (type in reactions) ? 
    reactions[type](state, action) : 
    state;
};

export default usersReducer;