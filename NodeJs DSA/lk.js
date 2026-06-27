

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