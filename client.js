/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let hobbies = ['baseball', 'cooking', 'football'];
for (hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.length);


// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times
let colors = ['teal', 'yellow', 'green', 'pink', 'teal', 'teal', 'teal'];
let tealCount = 0;
for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    if (color == 'teal') {
        tealCount++;
    }
}
console.table(colors);
console.log(`Teal was found ${tealCount} times`);

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2
let numbers = [2, 5, 4, 6, 98, 15];
let oddNumbers = [];
let evenNumbers = [];

for (number of numbers) {

    let even = (number % 2 === 0);
    console.log(even);

    if (even) {
        evenNumbers.push(number);
    } else {
        oddNumbers.push(number);
    }

}

console.log(numbers);
console.log(evenNumbers);
console.log(oddNumbers);


/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */


// Example output
// true, false, true, true
// Toggled false, true, false, false
let startingArray = [true, false, false, true];
let toggled = [];
for (i = 0; i < startingArray.length; i++) {
    console.log(startingArray[i]);
    if (startingArray[i] === true) {
        toggled.push(false);
    } else {
        toggled.push(true);
    }
}
console.log(toggled);

/**
 * #5 (STRETCH) Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8
let nums = [2, 1, 0, 5, 0, 0, 0, 5, 0, 10];
let firstZIndex = nums.indexOf(0);

for (let i = nums.length - 1; i >= 0; i--) {
    let num = nums[i];
    if (num === 0 && i !== firstZIndex) {
        nums.splice(i, 1);
    }
}
console.log(nums);

/**
 * #6 (STRETCH) Greatest Position Distance
 * --------------------
 * 1. Create a largish array of numbers, including at least two different
 *    numbers that repeat (e.g. 0, 2, 2, 7, 4, 1, 7, 8)
 * 2. Write a loop that finds the greatest position distance between
 *    repeating numbers in your array. In the above example, the 2's have
 *    a distance of 1, while the 7's have a distance of 3, so the
 *    greatest position distance for that array is 3.
 * 3. Output the array and its greatest position distance
 */


// Example output
// 5, 1, 8, 2, 9, 1, 4, 5, 0
// Greatest Position Distance: 7
let largishArr = [5, 8, 9, 2, 8, 6, 9, 5];
let newArr = [];
let distanceArr = [];
let distance;
for (newNum of largishArr) {
    if(newArr.indexOf(newNum) === -1) {
        newArr.push(newNum);
    } else {
        distance = largishArr.lastIndexOf(newNum) - largishArr.indexOf(newNum);
        distanceArr.push(distance);
        console.log(distanceArr);
    }
}
/* Note: I've used spread syntax at work and used it here as well 
after additional MDN research: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax*/
let greatestDistance = Math.max(...distanceArr);
console.log(largishArr);
console.log('Greatest position distance:', greatestDistance)