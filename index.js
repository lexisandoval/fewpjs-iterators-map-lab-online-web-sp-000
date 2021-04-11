const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   tutorials.map(tutorial => {
//     tutorial = tutorial.split(" ");
//     tutorial.map(word => word.charAt(0).toUppercase() + word.slice(1));
//     tutorial.join(" ");
//   });
// }
const titleCased = () => {
  return tutorials.map(string => string.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" "))
}