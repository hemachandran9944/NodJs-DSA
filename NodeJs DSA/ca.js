// Commen Algorithem

const Name = require('./array');


// Traversing
for (let personName  = 0; personName < Name.length; personName ++) {
    console.log(Name[personName])
};

// < Name.length
// How many element print data

//personName ++ 
// 0 ----> 1------> 2 ------> 3 




// Inserting


//const Name = ['Hema', 'Johnwick', 'Hemachandran', 'CM Vijay'];

Name.splice(2,0, 'JohnSnow') // Insseting Add element Particular Place 
console.log(Name);


// Particular data Delete Element method 
const fruits = ['Apple', 'Mango', 'Banana', 'Orange']; 
fruits.splice(3,0, 'Hema');
fruits.push('Express')
fruits.unshift('Veeran')
console.log(fruits);

// Remove Particular Element
//fruits.splice(2,2)
console.log(fruits);

for (let h = 0; h < fruits.length; h++) {
    console.log(fruits[h])
}