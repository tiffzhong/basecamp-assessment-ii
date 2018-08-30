// #1 Create an object called 'me' that has three keys, 'firstname' 'age' and 'state'. Assign the keys the appropriate values.

var me = {
  firstName: 'Tiffany',
  age: 25,
  state: 'California'
};

// #2 Add a new key/value pair to the me object using dot notation. The new key should be 'faveColor' and set it to your favorite color as a string

me.faveColor = 'maroon'

// #3 Below is an object, 'message'. Below it, add a 'text' key using bracket notation and assign it a string of whatever you would like.
//DON'T TOUCH THE CODE BELOW
var message = {
  date: new Date(),
  userName: me.firstname
};
//DON'T TOUCH THE CODE ABOVE
// CODE HERE
text['hello']

// #4 Create an object called 'adjustCount' and create two methods. One called 'upVote' and one called 'downVote'. upVote should take in a number and add one to it and downVote should take in a number and minus one from it.

// CODE HERE
var adjustCount = {
  upVote: 0,
  downVote: 0
};
adjustCount.upVote(1);
adjustCount.downVote(-1);

// #5 Create an array called 'myFriends' with four of your friends names

var myFriends = ['Cj', 'Kris', 'Jeremy', 'Chad'];

// #6 Add a fifth friends name to the end of your myFriends array
myFriends.push('Marjo');
// CODE HERE

// #7 Create a 'myArrayCopy' variable. It should equal the myArray variable. Use the built in JavaScript method to create a copy.
//DON'T TOUCH THE CODE BELOW
var myArray = [1, 2, 3, 4];

//DON'T TOUCH THE CODE ABOVE
var myArrayCopy = [];
for(var i = 0; i<myArray.length; i++){
  myArrayCopy.push(myArray[i]);
}
console.log(myArrayCopy);


// #8 Below is a array, myNumbers. Create a function called 'evensOnly' that returns the 'evensArray' of only even numbers
//DON'T TOUCH THE CODE BELOW
var myNumbers = [333, 1, 4, 5, 511, 34, 88, 77, 222];
//DON'T TOUCH THE CODE ABOVE
function evensOnly() {
  var evensArray = [];
  for(var i = 0; i < myNumbers.length; i++){
    if(myNumbers[i] % 2 == 0){
      evensArray.push(myNumbers[i]);
    }
  } 
  return evensArray;
}
evensOnly();
// #9 Using filter(), return only your friends of the array of people below. Assign it to a variable called 'trueFriends'.
// CODE HERE
var peopleIknow = [
  { name: "Steve", friend: true },
  { name: "Dan", friend: false },
  { name: "Bart", friend: true },
  { name: "Sarah", friend: false },
  { name: "Michelle", friend: false },
  { name: "Holly", friend: true }
];

var trueFriends = peopleIknow.filter(function(personName){
  return personName.friend = true;
});
console.log(trueFriends);

// #10 Create a function called indexFinder that will loop over an array and return a new array of the indexes of the contents e.g. [243, 123, 4, 12] would return [0,1,2,3]. 
// Create a new variable called 'indexes' and set it to contain the indexes of randomNumbers.
let randomNumbers = [1, 3453, 34, 456, 32, 3, 2, 0];

function indexFinder(){
  var index = [];
  for(var i = 0; i < randomNumbers.length; i++){
    if(randomNumbers[i]){
      index.push(i)
    }
  }return index;
}
console.log(indexFinder());