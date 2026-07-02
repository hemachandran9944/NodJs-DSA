// node array.js

const Name = ['Hema', 'Johnwick', 'Hemachandran', 'CM Vijay'];
    //Index     0         1            2               3

console.log(Name[0]);
console.log(Name[1]);
console.log(Name[3]);

for (let i = 0; i < Name.length; i++) {
    console.log(Name[i])
}



// Update Element
Name[0] = 'ABD';
console.log(Name);


// Dynamic Arreys -- Add Element
Name.push('Vk');
console.log(Name) //  <push>  add element to the last


Name.unshift('Messi');  // <unshift> add element to the beginning
console.log(Name)



// Remove element 

Name.pop(); //Romove the element
console.log(Name);

Name.shift(); // Remove the element beginning
console.log(Name);



// Find the number of element 
console.log('Total Element:', Name.length);



const Movies = ['JsonWick', 'Sharlock Homes', 'kara', 'Gilli'];


// Add Eelement arrays
Movies.push('Hema') // Add Element last
console.log(Movies); 

Movies.unshift('Hemachandran') // Add Element frist
console.log(Movies);

// Deleting Array Element

Movies.pop(); //// deleteting Element last
console.log(Movies);

Movies.shift();
console.log(Movies); //// deleteting Element frist


//for (let movieName  = 0; movieName  < Movies.length; movieName ++) {
//    console.log(Movies[movieName]);
//}




// Reveracing array

const mobile = ['vivo', 'Redmi', 'oppo', 'Samsung', 'I phone'];




for (let revarcsArray = mobile.length-1; revarcsArray>=0; revarcsArray--) {
    console.log(mobile[revarcsArray])
}




//duplicateArrayRemove

const stringName = 'Hemachandran D';
const testing = 'Hemachandran Hemachandran'


// ['H'e'm'a'c'h'a'n'd'r'a 'D'];
const myName = (stringName + testing).split('');
console.log(' Lettres Adding',myName)

const uniqueSet = new Set(myName);
const duplicateArrayRemove = [...uniqueSet];

console.log(duplicateArrayRemove);

for (let revarcsArray= duplicateArrayRemove.length-1; revarcsArray>=0; revarcsArray--) {
    console.log(duplicateArrayRemove[revarcsArray]);
}










//mobile.splice(1,1, 'realme');

//console.log('Movie Count: ', Movies.length);


module.exports = Name;















// SUMMARY MEMORY CARD FOR YOU:
// push()    -> Last Element Add
// unshift() -> First Element Add
// pop()     -> Last Element Delete
// shift()   -> First Element Delete
// splice()  -> Particular / Center Place (Add & Delete)
// for loop  -> Show/Print all data step-by-step





