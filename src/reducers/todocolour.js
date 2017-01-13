import wordToColour from '../helpers/wordtocolour.js';

const todoColour = (state = 'black', action) => {

  switch (action.type) {
    case 'TRACK_VALUE':
      return wordToColour(action.text);
    default:
      return state;
  }
};

export default todoColour;
