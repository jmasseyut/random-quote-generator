/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
let randQuote;
let htmlQuote ='';

//Array of objects that contain quotes, source, citation, and year. 

let quotes = [
  {
  	quote : "The only Zen you find at the top of a mountain is the Zen you bring with you",
  	source : "Zen Proverb"
  },
  {
  	quote : "For as a man thinketh in his heart, so he is",
  	source : "Proverbs 23:7"
  },
  {
  	 quote : "If you do what you've always done, you'll get what you've always gotten",
  	source : "Tony Robbins"
  },
  {
  	quote : "Do or do not, there is no try",
  	source : "Yoda",
    citation : "Star Wars Episode v: The Empire Strikes Back",
    year : "1980"
  },
  {
  	quote : "Let me pray not to be sheltered from dangers, but to be fearless in facing them.  Let me not beg for the stilling of my pain, but for the heart to conquer it",
  	source: "Rabindaranth Tagore"
  },
  {
  	quote : "Respond to every call that excites your soul",
  	source : "Rumi"
  },
  {
  	quote : "If you say that getting the money is the most important thing, you’ll spend your life completely wasting your time. You’ll be doing things you don’t like doing in order to go on living, that is to go on doing things you don’t like doing, which is stupid",
  	source : "Alan Watts"
  },
  {
  	quote : "Take therefore no thought for the morrow: for the morrow shall take thought for the things of itself. Sufficient unto the day is the evil thereof",
  	source: "Matthew 6:34"
  },
  {
  	quote : "It is not death that a man should fear, but he should fear never having lived",
  	source: "Marcus Aurelius"
  },
  {
  	quote : "The whole future lives in uncertainty, live immediately",
  	source: "Seneca"
  },
  {
    quote : "Let go or be dragged", 
    source : "Unknown"
  },
  {
    quote : "No valid plans for the future can be made by those who have no capacity for living now", 
    source : "Alan Watts"
  },
  {
    quote : "As you start to walk the Way, the Way appears",
    source : "Rumi"
  },
  {
    quote : "The mind is everything, what you think you become",
    source : "Buddha"
  },
  {
    quote: "Three things cannot be hidden long, the sun, the moon and the truth",
    source: "Buddha"
  },
  {
    quote: "Thousands of candles can be lighted from a single candle and the life of the candle will not be shortened. Happiness never decreases by being shared",
    source: "Buddha"
  }, 
  {
    quote : "One does not discover new lands without consenting to lose sight of the shore for a very long time", 
    source : "Andre Gide"
  },
  {
    quote : "The greatest mistake in life is being continually afraid to make one",
    source : "Elbert Hubbard"
  },
  {
    quote : "Our greatest fear should not be failure, but succeeding at things that don't matter", 
    source : "Francis Chan"
  },
  {
    quote : "The fear of death follows from the fear of life. A man who fully lives fully is prepared to die at any time", 
    source : "Mark Twain"
  },
  {
    quote : "If you know the enemy and know yourself you need not fear the results of 100 battles", 
    source : "Sun Tzu",
    citation : "The Art of War"
  },
  {
    quote : "Listen to the fool's reproach, it is a kingly title",
    source : "William Blake"
  },
  {
    quote : "I must not fear. Fear is the mind-killer. Fear is the little death that brings total obliteration.  I will face my fear. I will permit it to pass over and through me...",
    source : "Bene Gesserit Litany Against Fear",
    citation : "Dune",
    year: "1965"
  }
];
console.log(quotes); // Test to see if quotes is formatted properly, expected output is Array

/* This function uses jQuery to generate a random color and apply it to "#loadQuote" id and change the 
  background color when the button is clicked
  */ 

 let randomColor = $(function() {
  let colors = ['#DCDCDC', '#7B68EE', '#8B0000', '#FFA500', '#66CDAA', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#80800n0', '#ffd8b1', '#000075', '#808080', '#000000'],
    color;

  $('#loadQuote').click(function() {
    let randColor;
    do {
      randColor = colors[Math.floor(Math.random() * colors.length)];
    } while (color == randColor);
    $('body').css('background-color', randColor);
    color = randColor;
  });
});

/* This function generates a random number from 0 to the length of the array
  It then pulls a random quote from the array @ index of randNum and returns that quote. */
  
function getRandomQuote() {
   let randNum = Math.floor(Math.random() * quotes.length);
   let randQuote = quotes[randNum];
   return randQuote;
}
console.log(getRandomQuote()); // test to see if above function is working correctly 


/* This function uses the getRandomQuote() function from above and stores that value into a variable 
  it then builds up a string of HTML as well as checks to see if optional properties are present in the original object 
  finally, it outputs the built up string of HTML onto the page in a div with id of "#quote-box"
*/

function printQuote() {
  let randomQuote = getRandomQuote(); // This variable will hold the random quote that will print to the screen
  let htmlQuote = '';
  htmlQuote += '<p class="quote">' + randomQuote["quote"] + '</p>';
  htmlQuote += '<p class="source">' + randomQuote["source"];
  if(randomQuote.citation) {
    htmlQuote += '<span class="citation">' + randomQuote["citation"] + '</span>';
  }
  if (randomQuote.year) {
    htmlQuote += '<span class="year">' + randomQuote["year"] + '</span>';
  }
  htmlQuote += '</p>';
  document.getElementById('quote-box').innerHTML = htmlQuote;
}


  console.log(htmlQuote); //test to see if above function is working

//This function changes the background color every 20 seconds
setInterval(function () {
  let randoColor = Math.floor(Math.random()*16777215).toString(16); //generates a random color 
  document.body.style.backgroundColor = "#" + randoColor; // outputs random color to page after converting to hex value
},20000);


//This function changes the quote displayed on screen every 20 seconds
setInterval(printQuote, 20000);


/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
