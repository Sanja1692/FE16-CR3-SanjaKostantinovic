var rihanna = 15;
var therollingstone = 10;
var alisiakeys = 17;
var avrilLavigne = 18;
var milesDavis = 22;
var theWeekend = 20;
var bobdilan = 21;
var fifthharmony = 18;
var shakira = 24;



var fest_day1 = rihanna + milesDavis + bobdilan;
console.log("On the first day of the festival, I was lucky to watch bands Rihanna, Miles Davis and Bob Dilan.");
var fest_day2 = therollingstone + milesDavis + fifthharmony;
console.log("Then I watched the bands The Rolling Stone, Miles Davis and Fifth Harmony on the second day and it cost me " + fest_day2 + "€ in total that day.");
var fest_day3 = alisiakeys + theWeekend + shakira;
var sum = fest_day1 + fest_day2 + fest_day3;
console.log("I was a bit tired on the third day but it was so much worth it to watch the bands Alisia Keys, The Weekend and Shakira and I spent " + sum + "€ for the three days of the festival");

var action = (70 / 100 * sum);
var saved = sum - action;

console.log("If I had booked the concert with enough time in advance, it would have cost me a total of " + action + "€ and I would have saved " + saved +
    "€.");