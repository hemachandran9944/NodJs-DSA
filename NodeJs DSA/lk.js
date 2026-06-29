

// LinkList

// Instaead element (called Node)











// Traversing
const Name = 'Hemachandran';

const myName = Name.split('');

console.log(myName);

const removeDuplicateArray  = new Set(myName); 
const uniqueNewDate = [...removeDuplicateArray];

for (let reversingArrey =uniqueNewDate.length-1; reversingArrey>=0; reversingArrey--) {
    console.log(uniqueNewDate[reversingArrey]);
}


for (let removedDuplicatelettres = 0; removedDuplicatelettres <uniqueNewDate.length; removedDuplicatelettres++) {
    console.log('removedDuplicatelettres:', uniqueNewDate[removedDuplicatelettres]);
}


const countElement = [
  'H', 'e', 'm', 'a',
  'c', 'h', 'a', 'n',
  'd', 'r', 'a', 'n'
]


console.log(countElement);



const Names = ['Hema', 'Johnwick', 'Hemachandran', 'CM Vijay'];


console.log(Names);

//Names.splice(1,1, 'Index');


console.log(Names);

for (let Testing = 0; Testing < Names.length; Testing++) {
    console.log(Names[Testing]);
}

console.log('---------');

for (let Check =  Names.length-1; Check>=0;  Check--) {
    console.log(Names[Check]);
}


console.log('Names Count:', Names.length)



//[
//  'H', 'e', 'm', 'a',
//  'c', 'h', 'n', 'd',
//  'r', ' ', 'D'
//]


const MyName = 'Hemachandran D'
const duplicateArraycancled = MyName.split('');
const removedulicateArrey = new Set(duplicateArraycancled)
const UnqiueDate = [...removedulicateArrey];


for (let PrintUniquArrey = 0; PrintUniquArrey < UnqiueDate.length; PrintUniquArrey++) {
    console.log(UnqiueDate[PrintUniquArrey]);
}

for (let PrintUniquArrey = UnqiueDate.length-1; PrintUniquArrey>=0; PrintUniquArrey--) {
    console.log(UnqiueDate[PrintUniquArrey]);
}



//const Name = 'Hemachandran';
//
//const myName = Name.split('');
//
//console.log(myName);
//
//const removeDuplicateArray  = new Set(myName); 
//const uniqueNewDate = [...removeDuplicateArray];