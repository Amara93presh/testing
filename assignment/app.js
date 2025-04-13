// Function that prints your full name
function fullName() {
    console.log("Amarachi Uwandu");
  }
  
  // Function that takes firstName and lastName as parameters and returns full name
  function fullName(firstName, lastName) {
    return ${firstName} ${lastName};
  }
  
  // Function that adds two numbers and returns the sum
  function addNumbers(a, b) {
    return a + b;
  }
  const countries = [
    'Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'IceLand', 'Ireland', 'Japan', 'Kenya',
  ];
  const names = ['Tamara', 'Mathias', 'Elias', 'Brook'];
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  countries.forEach(country => console.log(country));
  names.forEach(name => console.log(name));
  numbers.forEach(number => console.log(number));

  // Uppercase countries
const uppercasedCountries = countries.map(country => country.toUpperCase());
console.log(uppercasedCountries);

// Create an array of country lengths
const countryLengths = countries.map(country => country.length);
console.log(countryLengths);

// Square each number in the numbers array
const squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

// Convert names to uppercase
const uppercasedNames = names.map(name => name.toUpperCase());
console.log(uppercasedNames);

// Map products to their prices
const productPrices = products.map(product => product.price);
console.log(productPrices);

// Filter out countries containing 'land'
const countriesWithLand = countries.filter(country => country.includes('land'));
console.log(countriesWithLand);

// Filter out countries with exactly six characters
const countriesWithSixChars = countries.filter(country => country.length === 6);
console.log(countriesWithSixChars);

// Filter out countries with six characters or more
const countriesWithSixOrMoreChars = countries.filter(country => country.length >= 6);
console.log(countriesWithSixOrMoreChars);

// Filter out countries starting with 'E'
const countriesStartingWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartingWithE);

// Filter out products with missing prices
const validProducts = products.filter(product => product.price !== '' && product.price !== ' ');
console.log(validProducts);


function findCountriesWithPattern(pattern) {
    return countries.filter(country => country.toLowerCase().includes(pattern.toLowerCase()));
  }
  
  console.log(findCountriesWithPattern('land'));
  console.log(findCountriesWithPattern('ia'));
  console.log(findCountriesWithPattern('stan'));


  const dog = {};

// Add properties to the dog object
dog.name = 'Buddy';
dog.legs = 4;
dog.color = 'Brown';
dog.age = 3;
dog.bark = function() {
  return 'Woof! Woof!';
};

// Print the dog object
console.log(dog);

// Access the properties
console.log('Name:', dog.name);
console.log('Legs:', dog.legs);
console.log('Color:', dog.color);
console.log('Age:', dog.age);
console.log('Bark:', dog.bark());