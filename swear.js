function randomArray(array) {
	return array[Math.floor(Math.random() * array.length)];
}

var
	adjectives = ["fucking ","pissing ","ruddy ","cunting ","buggering ","holy ","sweet ","sweet baby ","royal ","mother of ","sweet mother of ","holy mother of ","for the love of ","you filthy ","you ","what an absolute ","what a total ","grunting ","filthy ","well that's just ", "you ", "sweet ", "sweet baby", "holy ", "up your ", "royal ", "amateur ", "aspiring ", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
	prefixes   = ["cock","piss","cunt","fiddle","fanny","arse","bum","fudge","bugger","shit","shite","fuck","tit","granny","wank","jobbie","crack","snatch","grunt","cheese","butt","crotch","gutter","anal","poo","poop","smeg","filth","dirt","sack","dirt","wonder","glory","trouser","pant","ass","sweat","armpit","cheddar","discharge","sewer","pork","mother","muck","dairy","grease"],
	suffixes   = ["sticks","drops","flaps","hole","stain","whore","jockey","growler","fudge","badger","buggery","slut","dirt","sniffer","dodger","tits","rash","bandit","fiddler","job","puppet","stick","snatcher","sucker","goblin","cheese","grunter","wank","biscuits","fuck","worm","fluff","beast","monkey","discharge","shaft","poo","poop","gobbler","rat","chimp","bucket","streak","troll","maggot","pile","dirt","wank","charmer","botherer","sniffer","licker","farmer","grease","fungus","gremlin","worrier","trumpet","tuba","troll"];

function update() {
  swear = (randomArray(adjectives) + randomArray(prefixes) + randomArray(suffixes) + "!").toUpperCase(),
    combinations = adjectives.length * prefixes.length * suffixes.length;

  document.getElementById("swear").innerHTML = swear;
  document.getElementById("combinations").innerHTML = combinations;
}

update();

document.addEventListener("click", update, false);
