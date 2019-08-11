const planets = [
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune"
];

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// foreach() - iterates the array and preforms an action on each item in the array

const planetEl = document.getElementById("planets");
planetEl.innerHTML += "<h1>Planets List</h1>";
planets.forEach(planet => {
  planetEl.innerHTML += `<section>${planet}</section>`;
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

*/
// map() - iterates the array and returns a new array from the values

const captPlanets = planets.map(planet => {
  let firstLetter = planet.charAt(0).toUpperCase() + planet.slice(1);
  return (planetEl.innerHTML += firstLetter + ", ");
});
// console.log(captPlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    
*/
// filter() - iterates the array and returns a new array with values that meet the condition
const ePlanets = planets.filter(planet => {
  return planet.includes("e");
});
console.log(ePlanets);
