/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
 const quotes = [
   {quote:"“Yesterday is history, tomorrow is a mystery, and today is a gift––that is why it is called the present.”", 
   source: "Master Oogway.", 
   citation:"Kung Fu Panda, the movie."},

   {quote:"“It is during our darkest moments that we must focus to see the light.”", 
   source: "Aristotle",
   tag: "inspirational"},

   {quote:"“Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.”", 
   source: "Dr.Seuss", 
   citation:"The Lorax-the movie."},

   {quote:"“Love the life you live. Live the life you love.”", 
   source: "Bob Marley"},

   {quote:"“Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma -- which is living with the results of other people's thinking.”", 
   source: "Steve Jobs", 
   citation:"Graduation speech", 
   year:2005,
   tag: "inspirational"},

   {quote:"“An unexamined life is not worth living.”", 
   source: "Socrates",
   tag: "inspirational"},
   
   {quote:"“I don’t care that they stole my idea …  I care that they don’t have any of their own.”", 
   source: "Nicolas Tesla"}

 ]


/***
 * `getRandomQuote` function
 * Set a function that generates a random number.
 * Use that random number to pick an object from the array quotes
***/
 function getRandomQuote(){
 let math = Math.floor(Math.random() * quotes.length);
 let quotePicker = quotes[math];
 return quotePicker;
 }


/***
 * `printQuote` function
 * Assign the result of the getRandomQuote a variable
 * Create a variable that stores an HTMl string along with using the function to select properties of each object
 * Create if statement that adds the year/citation depending if the object has it or not.
***/
function printQuote(){
 let quotePicker = getRandomQuote();
 let html =  `<p class="quote"> ${quotePicker.quote} </p> <p class="source"> ${quotePicker.source} </p>`;
 if (quotePicker.citation){
  html += `<span class="citation"> ${quotePicker.citation}  </span> `
 } 
 if (quotePicker.year){
  html += `<span class="citation"> ${quotePicker.year}  </span> `
 } if (quotePicker.tag){
  html += `<span class="citation"> ${quotePicker.tag}  </span> ` }
 document.getElementById('quote-box').innerHTML = html;

 } 
 
 /***
  * `Random background color`\
  * create and interval with @setInterval 
  * Generate the three main color with math random
  * Insert those color in a RGB string to generate a random color
  * select the body-background color element and assing it the random color
  * 
  ***/
  setInterval(
 function randomColor(){
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  randomRGB = `rgb( ${red}, ${green}, ${blue} )`;
  let color = ` ${randomRGB}`; 
  document.body.style.background = color;
},2000);
/*** 
 * Random quote interval
 * 
 * ***/
 var intervalID = window.setInterval(printQuote, 2000, );
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);