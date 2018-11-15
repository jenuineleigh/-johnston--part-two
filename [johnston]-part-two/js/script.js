// event type
// var a, b, c;
// a = 'casual'
// b = 'semi-formal'
// c = 'formal'

// clothing suggestion
// var d, e, f;
// d = 'something comfy'
// e = 'a polo'
// f = 'a suit'

// temperature
// var g, h, i;
// g = < 54 'degrees Fahrenheit'
// h = 54-70 'degrees Fahrenheit'
// i = > 'than degrees Fahrenheit'

// clothing suggestion
// var j, k, l;
// j = 'a coat'
// k = 'a jacket'
// l = 'no jacket'





let eventType = "casual";
let clothingSuggestion = "something comfy";
let result = eventType && clothingSuggestion

if (eventType === "casual") {
  clothingSuggestion = "something comfy";
} else if (eventType === "semi-formal") {
  clothingSuggestion = "a polo";
} else if (eventType === "formal") {
  clothingSuggestion = "a suit";
} else {
  console.log('Invalid event type.');
};
console.log(clothingSuggestion);



let tempFahr = "< 54 'degrees Fahrenheit' ";
let clothingSuggestion = "a coat";

if (tempFahr === "< 54 'degrees Fahrenheit' ") {
  clothingSuggestion = "a coat";
} else if (tempFahr === "54-70 'degrees Fahrenheit'") {
  clothingSuggestion = "a jacket";
} else if (tempFahr === "> 'than degrees Fahrenheit'") {
  clothingSuggestion = "no jacket";
} else {
  console.log('Invalid temperature.');
};
console.log(clothingSuggestion);



console.log(result)