const wordToColour = (text) => {
  let colourMap = {
    css: 'blue',
    javascript: 'red',
    databases: 'mid-gray',
    github: 'green',
    email: 'orange',
    design: 'pink'
  };
  let colour = 'black';
  text.split(" ").forEach(word =>
    colourMap[word.toLowerCase()] ? colour = colourMap[word.toLowerCase()] : '');
  return colour;
};

export default wordToColour;
