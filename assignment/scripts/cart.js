console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
//We are creating a global variable called basket that is an empy array

function addItem( item ){
    basket.push(item);
    return true;
}
// We are sunning addItem and the item we put in as an argument will get pushed into the basket array
//It will also return 'true' once it is added to the array

function listItems(){
    for ( items in basket){
        console.log(basket[items]);
    }
}
//We are running a loop that runs for each item in the basket and console logs that item.


function empty(){
    basket = [];
}
//This sets the value of basket back to 0.

console.log('Adding an item to the basket and expect true for result. Result =', addItem('grapes'));
console.log('Adding an item to the basket and expect true for result. Result =', addItem('Oranges'));
console.log('Adding an item to the basket and expect true for result. Result =', addItem('Bananas'));
// console.log(basket);

listItems();
//log each item in the basket.