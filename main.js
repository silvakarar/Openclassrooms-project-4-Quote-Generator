
//First box DOM
const firstQuoteBox = document.getElementById("firstQuoteBox");
const spaceQuoteButton = document.getElementById("spaceButton");


//Second box DOM
const secondQuoteBox = document.getElementById("secondQuoteBox");
const movieQuoteButton = document.getElementById("movieButton");
;


// Quote class with object
class Quote {
  constructor(beginning, middle, end,) {
    this.beginning = beginning;
    this.middle = middle;
    this.end = end;
    
  }

  // Quote function 
  getQuote(numberOfQuotes) {
    let allQuotes = "";
    for (let i = 0; i < numberOfQuotes; i++) { 
      let beginningQuote = this.beginning[Math.floor(Math.random() * this.beginning.length)];
      let middleQuote = this.middle[Math.floor(Math.random() * this.middle.length)];
      let endQuote = this.end[Math.floor(Math.random() * this.end.length)];
  
    allQuotes += beginningQuote + " " + middleQuote + " " + endQuote + "  <br><br>";
  }
    return allQuotes;
     
  }
  
};

// First quote box array

let beginning1 = [
  "Let’s go to",
  "Let’s travel to",
  "Come with me lets pack and go to",
  "We always wanted to go to",
  ];

let middle1 = [
  "Jupiter",
  "Saturn",
  "Mars",
  "Pluto"
  ];

let end1 = [
  "and check out what’s it like in space.",
  "to experience space travel.",
  "and find out what’s it really like there.",
  "and explore a new planet."
  ];



// Second Quote Box array 
let beginning2 = [
  "Frankly, my dear, I don't give a damn." + "<br>" + "-Gone with the wind,1939" + "<br><br>",

  "Carpe diem. Seize the day, boys. Make your lives extraordinary." +  "<br>" + "-Dead Poets Society, 1989" + "<br><br>",

  "Magic Mirror on the wall, who is the fairest one of all?" + "<br>" + "-Snow White and the Seven Dwarfs, 1937" + "<br><br>",

  "Toto, I've got a feeling we're not in Kansas anymore." + "<br>" + "- Wizard of Oz, 1939 -" + "<br><br>",

  " “Today, I consider myself the luckiest man on the face of the earth.”" + "<br>" + "-The Pride of the Yankees, 1942" + "<br><br>" ,

  "“You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.”" + "<br>"  + "-On the Waterfront, 1954" + "<br><br>"  , 

  "May the Force be with you." + "<br>" + "Star Wars, 1977" + "<br><br>",


  " “My mama always said life was like a box of chocolates. You never know what you're gonna get.”" + "<br>" + "-Forrest Gump, 1994" + "<br>"
  
  
  
  ];
  
  
  let middle2 = [
    
    "Do, or do not. There is no “try.”"  + "<br>" + "Star Wars, 1977" + "<br><br>",

    "I'm the king of the world" + "<br>" + "-Titanic, 1997" + "<br><br>",

    "“If you build it, he will come.”" + "<br>"  + "-Field of Dreams, 1989" + "<br><br>",

    "They may take our lives, but they'll never take our freedom!" + "<br>" + "-Braveheart, 1995" + "<br><br>",

    "Fasten your seatbelts. It's going to be a bumpy night." + "<br>" + "-All about Eve" + "<br>" 
    
    
  ];
  

  let end2 = [
    "Show me the money!" + "<br>" +  "-Jerry Maguire, 1996" + "<br><br>",

    "Play it, Sam. Play 'As Time Goes By.'" + "<br>" +  "  -Casablanca, 1942" + "<br><br>",

    "I have always depended on the kindness of strangers." + "<br>" +  "- A Streetcar Named Desire, 1951" +  "<br><br>",

    "Listen to them. Children of the night. What music they make." + "<br>" +  " -Dracula, 1931"

  ];
  


// Instances of the same class
let myQuote = new Quote(beginning1, middle1, end1);
 
let mySecondQuote = new Quote(beginning2, middle2, end2);



//Event delegation for Quote boxes
document.getElementsByTagName("BODY")[0].addEventListener("click", function(e) {
  e.preventDefault()
   
  if (e.target.matches("#quoteListOne a")) {
    let numberOfQuotes = parseInt(e.target.text);
    document.getElementById("firstQuoteBox").innerHTML = myQuote.getQuote(numberOfQuotes);
    
  }  else if (e.target.matches("#quoteListTwo a")) {
    let numberOfQuotes = parseInt(e.target.text); 
    document.getElementById("secondQuoteBox").innerHTML = mySecondQuote.getQuote(numberOfQuotes);

  } else if (e.target.matches("#quoteListTwo a")){
    document.getElementById("stopQuotes").innerHTML = "";
    
  
  } 

  });

  

// Link back to Quotes page
$("#myHref").on('click', function(event) {
    event.preventDefault();
    window.location = "index.html";
});
//Link back to thank you page
$("#myLink").on('click', function(event) {
  event.preventDefault();
  window.location = "thankyoupage.html";
});




 





