var mainDiv = document.getElementById("main");
mainDiv.style.background = "#eee";

var button = document.getElementById("button");
var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
box1.style.textAlign = "center";
box2.style.textAlign = "center";
box1.style.fontSize = "30px";
box2.style.fontSize = "20px";
box1.style.fontFamily = "papyrus";
box2.style.fontFamily = "Georgia";

button.addEventListener("click", generate);
function generate() {
  const quotes = [
    ["“We become what we think about”", "Earl Nightingale"],
    [
      "“Integrity is the most valuable and respected quality of leadership. Always keep your word.”",
      "Brian Tracy",
    ],
    [
      "“If you are working on something that you really care about, you don’t have to be pushed. The vision pulls you.”",
      "Steve Jobs",
    ],
    [
      "“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.”",
      "Winston Churchill",
    ],
    [
      "“There are no limits to what you can accomplish, except the limits you place on your own thinking.”",
      "Brian Tracy",
    ],
    [
      "“The best way to get started is to quit talking and begin doing.”",
      "Walt Disney",
    ],
    [
      "“The Key Responsibility Of Leadership Is To Think About The Future. No One Else Can Do It For You.”",
      "Brian Tracy",
    ],
    ["“Creativity is intelligence having fun.”", "Albert Einstein"],
    [
      "“Security is mostly a superstition. Life is either a daring adventure or nothing.”",
      "Helen Keller",
    ],
    ["“To see what is right and not do is a lack of courage.”", "Confucius"],
    [
      "“Go as far as you can see; when you get there, you’ll be able to see further.”",
      "Thomas Carlyle",
    ],
    [
      "“Do what you can with all you have, wherever you are.”",
      "Theodore Roosevelt",
    ],
  ];

  let num = Math.floor(Math.random() * quotes.length);
  let quote = quotes[num][0];
  let person = quotes[num][1];
  box1.textContent = quote;
  box2.textContent = person;
}
