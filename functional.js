let wojewodztwa = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
//  Returns a URL-friendly version of a string
// Example: "Warminsko Mazurskie" -> "warminsko-mazurskie"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}
  
// urls: Imperative version:
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}

console.log(imperativeUrls(wojewodztwa))

// urls: Functional version:
function functionalUrls(elements) {
 return elements.map( element => urlify(element));
}
console.log(functionalUrls(wojewodztwa));

function anotherURL(elements) {
  return elements.map( element => element = "https://example.com/" + element)
}

console.log(anotherURL(imperativeUrls(wojewodztwa)));

// Singles: Imperative version

function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    } 
  })
  return singles;
}

console.log(imperativeSingles(wojewodztwa));


// Singles: Functional version

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}


console.log(functionalSingles(wojewodztwa));


function firstState(elements) {
  return elements.filter( element => element.includes("Dakota"));
}

function secondState(elements) {
  return elements.filter( element => element.split(/\s+/).length === 2);
}

console.log(firstState(wojewodztwa));
console.log(secondState(wojewodztwa));


// reduce
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  })
  return total;
}

console.log(imperativeSum(numbers));  

// sum: Functional solution

function functionalSum(elements) {
  return elements.reduce((total, n) => {return total += n; });
}

console.log(functionalSum(numbers));  


 // lengths: Imperative solution 
 function imperativeLengths(elements) {
   let lengths = {};
   elements.forEach(function(element) {
     lengths[element] = element.length;
   });
   return lengths;
 }
 
 console.log(imperativeLengths(wojewodztwa));




 // lengths: Functional solution 
 function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths; }, {}); 
 }
 
 console.log(functionalLengths(wojewodztwa));


let b = [ 22, 23, 24, 25, 27];

function functionalProd(elements) {
  return elements.reduce((total, n) => total *= n);
} 

console.log(functionalProd(b));


