// Utilities
const compose = (a, b, x) => a(b(x));

const lower = (text) => text.toLowerCase();

const splitString = (text) => text.split(" ");

const findVal = (key, obj) => obj[key];

const lowerWordArray = (text) => compose(splitString, lower, text);

const catchKey = (obj, text) => lowerWordArray(text).find(word => findVal(word, obj));

// Word/Colour Map
const wordColours = {
  css: 'blue',
  javascript: 'red',
  databases: 'mid-gray',
  github: 'green',
  email: 'orange',
  design: 'pink'
};

// Output
const wordToColour = (text) => wordColours[catchKey(wordColours, text)] || 'black';

export default wordToColour;
