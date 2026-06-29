
//Matrix

const matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

//const target = matrix[1];
//target.reverse();
//console.log(matrix[1][1]); 

//matrix[0].splice(1,0, 'j')
//matrix[0].push('Hello')
//console.log(matrix);


// Print One Index

for (let printMatrixData = 0; printMatrixData < matrix.length; printMatrixData++) {
    if (printMatrixData === 0) {
        console.log(printMatrixData, matrix[printMatrixData][1]);
        break;
    }
}


//Print One Row
for (let printMatrixData = 1; printMatrixData < matrix.length; printMatrixData++) {
    if (printMatrixData === 1) {
        console.log(printMatrixData, matrix[printMatrixData]);
        break;
    }
}



// Reverse One Row 
for (let printMatrixData = matrix.length-1; printMatrixData>=0;  printMatrixData--) {
    if (printMatrixData === 0) {
        console.log(matrix[printMatrixData].reverse().join(' '));
        break;
    }
}




// Reverse One Element

for (let printMatrixData = matrix.length-1; printMatrixData>=0;  printMatrixData--) {
    if (printMatrixData === 0) {
        let num = matrix[printMatrixData] [1];
        let reversum = num.toString().split('').reverse().join('');
        console.log(reversum);
        break;
    }
}


const newMatrix = [
    ['Hema', 'Hello', 'Good'],
    ['Pen', 'Water', 'Mobile']
]

console.log('Reversed Log:',newMatrix[1][0].split('').reverse().join(''));

//Reveres Wrod

for (let printnewMatrix = newMatrix.length-1; printnewMatrix>=0;  printnewMatrix--) {
    if (printnewMatrix === 0) {
        let string = newMatrix[printnewMatrix] [2]
        let revere_newMatrix_stringName = string.split('').reverse().join('')
        console.log('Reveres Wrod:',revere_newMatrix_stringName);
    }
}


//Totla Element Print

for (let printnewMatrixKeyword = 0; printnewMatrixKeyword < newMatrix.length; printnewMatrixKeyword++) {
    console.log('Totla Element Print:',newMatrix[printnewMatrixKeyword]);
}

//One Row Element Print
for (let printnewMatrixKeyword = 0; printnewMatrixKeyword < newMatrix.length; printnewMatrixKeyword++) {
    if (printnewMatrixKeyword === 1) {
        let newMatrixPrint_KeyWord = newMatrix[printnewMatrixKeyword] 
        console.log('One Row Element Print:',newMatrixPrint_KeyWord);
    }
}


//One Index Print
for (let printnewMatrixKeyword = 0; printnewMatrixKeyword < newMatrix.length; printnewMatrixKeyword++) {
    if (printnewMatrixKeyword === 0) { 
        let newMatrixPrint_KeyWord = newMatrix[printnewMatrixKeyword][0]
        console.log('One Index Print:',newMatrixPrint_KeyWord);
    }
}


//All Element Reverse Print
for (let printnewMatrixKeyword = newMatrix.length-1; printnewMatrixKeyword>=0;  printnewMatrixKeyword--) {
    console.log('All Element Reverse Print: ',newMatrix[printnewMatrixKeyword].reverse());
}



const newtesting = 'Hemachandran D';

console.log(newtesting.length);

const splicting = newtesting.split(''); 
const duplicateKeyWordsclean = new Set(splicting) 
const Clearning_duplicate_keyword = [...duplicateKeyWordsclean] 


//Revase MyName 

for (let RevermyName = Clearning_duplicate_keyword.length-1; RevermyName>=0; RevermyName--) {
    console.log('Revase MyName:',Clearning_duplicate_keyword[RevermyName]);
}



//[
//  'H', 'e', 'm', 'a',
//  'c', 'h', 'a', 'n',
//  'd', 'r', 'a', 'n',
//  ' ', 'D'
//]








