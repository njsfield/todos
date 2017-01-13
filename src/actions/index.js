export const addTodo = (text, colour) => {
  return {
    type: 'ADD_TODO',
    text,
    colour
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};


export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const trackValue = (text) => {
  return {
    type: 'TRACK_VALUE',
    text
  };
};
