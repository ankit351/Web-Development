// used in 50
let impArray = ['adrak', 'pyaz', 'bhindi'];
localStorage.setItem('name', 'harshit')
localStorage.setItem('nam0e', 'harshit2')
localStorage.setItem('sabzi', JSON.stringify(impArray))
// localStorage.clear()
localStorage.removeItem('nam0e');
let n = localStorage.getItem('name')
n2 = JSON.parse(localStorage.getItem('sabzi'));
console.log(n2);

sessionStorage.setItem('name', 'harshit')
sessionStorage.setItem('nam0e', 'harshit2')
sessionStorage.setItem('sabzi', JSON.stringify(impArray))

// // Add a key-value pair inside local Storage
// localStorage.setItem('Name', 'Harry');
// localStorage.setItem('Name2', 'Rohan');
// localStorage.setItem('Sabzi', );

// Clears the entire local storage
// localStorage.clear();

// Clear a particular key-value pair
// localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
// let name = localStorage.getItem('Name');
// console.log(name)

// sessionStorage.setItem('sessionName', 'sHarry');
// sessionStorage.setItem('sessionName2', 'sRohan');
// sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));
