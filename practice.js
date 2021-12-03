// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(number) {
    if (number % 5 === 0) {
      count++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter(fruits, function(currentFruit) {
    if (currentFruit === targetFruit) {
      return currentFruit;
    }
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function(currentFruit) {
    if (currentFruit.startsWith(letter)) {
      return currentFruit;
    }
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter(desserts, function(currentDessert) {
    if (currentDessert.type === 'cookie') {
      return currentDessert;
    }
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  var sum = 0;
  return _.reduce(products, function(sum, currentProduct) {
    var priceNum = parseFloat(currentProduct.price.substring(1));
    return sum += priceNum;
  }, sum);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  var output = {};
  return _.reduce(desserts, function(output, currentDessert) {
    var currentType = currentDessert.type;
    if (output[currentType] === undefined) {
      //using output.hasOwnProperty doesn't do anything and output stays empty
      output[currentType] = 1;
    } else {
      output[currentType]++;
    }
    return output;
  }, output);
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {
  var movieList = [];
  return _.reduce(movies, function(movieList, currentMovie) {
    if (currentMovie.releaseYear >= 1990 && currentMovie.releaseYear <= 2000) {
      movieList.push(currentMovie.title);
    }
    return movieList;
  }, movieList);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  // var pass = false;
  // return _.reduce(movies, function(timeLimit, currentMovie) {
  //   if (currentMovie.runtime <= timeLimit) {
  //     pass = true;
  //   }
  //   return pass;
  // }, timeLimit);
  return _.reduce(movies, function(meetsTimeLimit, currentMovie) {
    if (meetsTimeLimit) {
      return true;
    }
    return currentMovie.runtime <= timeLimit;
  }, false);
  //meetsTimeLimit doesn't need to be set to anything since it's just a mannequin boolean value
  //we set the accumulator to false at the bottom as a default value instead of setting meetsTimeLimit
  //I think the if statement is false until the bottom return statement is true, which I guess
  //turns meetsTimeLimit true and leads to every item returning true afterwards
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(currentFruit) {
    return currentFruit.toUpperCase();
  });
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(currentDessert) {
    if (currentDessert.ingredients.includes('flour')) {
      currentDessert.glutenFree = false;
      return currentDessert;
    } else {
      currentDessert.glutenFree = true;
      return currentDessert;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map(groceries, function(currentItem) {
    var centsPrice = parseFloat(currentItem.price.substring(1)) * 100;
    currentItem.salePrice = '$' + ((centsPrice * (1 - coupon)) / 100).toFixed(2);
    return currentItem;
  });
};
