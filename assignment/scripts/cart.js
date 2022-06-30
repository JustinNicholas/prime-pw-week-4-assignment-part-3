console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
//We are creating a global variable called basket that is an empy array

const maxItems = 5;

function isFull(){
    if (basket.length < maxItems){
        return false;
    } else {
        return true;
    }
}
// We added a function of isFull to max out the basket at 5 items that is referenced in the next function.

function addItem( item ){
    if (isFull() === false){
    basket.push(item);
    return true;
    } else {
        return false;
    }
}
// We are sunning addItem and the item we put in as an argument will get pushed into the basket array
//It will also return 'true' once it is added to the array

function listItems(){
    for ( let items in basket){
        console.log(basket[items]);
    }
}
//We are running a loop that runs for each item in the basket and console logs that item.


function empty(){
    basket = [];
}
//This sets the value of basket back to 0.

console.log('Adding an item to the basket and expect true for result. Result =', addItem('Grapes'));
console.log('Adding an item to the basket and expect true for result. Result =', addItem('Oranges'));
console.log('Adding an item to the basket and expect true for result. Result =', addItem('Bananas'));
console.log('Adding an item to the basket and expect true for result. Result =', addItem('Peaches'));
console.log('Adding an item to the basket and expect true for result. Result =', addItem('Cherries'));
console.log('Adding an item to the basket and expect false for result. Result =', addItem('Pizza'));
// console.log(basket);

listItems();
//We are running the funtion to log each item in the basket.



function removeItem( itemToRemove ){
    if (basket.indexOf( itemToRemove ) >= 0 ){
        basket.splice( basket.indexOf( itemToRemove ), 1)
    } else {
        return null;
    }
}

//We are checking to see if the item we type in is in the array.
//If it is in the array we find the index number. If yes, We remove the item at that index.
//If its not the index is -1 and put us into the else statement. and we return null.

removeItem('Bananas');
console.log('We expect Bananas to be removed',basket);
//We are running these to show that that Bananas will be removed.

console.log('We expect Nothing to be removed and a value of null',removeItem('Burgers'));
console.log(basket);
//We are running this to show Burgers will return null.

empty();
//We are running the function to empty the items in the basket variable.

console.log('We are expecting this to be empty', basket);
//We are checking to amke sure that the basket is empty.