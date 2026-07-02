const matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

console.log(matrix[0][0].toString().split('').reverse().join(''));


for (let matrixPrint = 0; matrixPrint < matrix.length; matrixPrint++) {
    console.log(matrix[matrixPrint]);
    break;
}



for (let matrixPrint = matrix.length-1; matrixPrint>=0; matrixPrint--) {
    if (matrixPrint === 0) {
        console.log(matrix[matrixPrint].reverse()); 
        break;
    }
}


for (let oneElementRevering =  matrix.length-1; oneElementRevering>=0; oneElementRevering--) {
    if (oneElementRevering === 0) {
        let reverseIndex = matrix[oneElementRevering][0]
        let outPut_var  = reverseIndex.toString().split('').reverse().join('');
        console.log(outPut_var);  
    }
}




for (let addElement = 0; addElement < matrix.length; addElement++) {
    matrix[0].push(100);
    matrix[0].shift();
    console.log(matrix[addElement]);
    break;
}



const newMatrix = [
    [10, 20, 30 ,20, 30],
    [40, 50, 60 ,50, 60],
    [70, 80, 90 ,80, 90]
]


const removeDuplicateArrey = [... new Set (newMatrix.flat())];
for (let NewIndex = 0; NewIndex < removeDuplicateArrey.length; NewIndex++) {
    console.log(removeDuplicateArrey[NewIndex]);
}

