

const newMatrix_rm_dp_arr = [
    [10, 20,30,10, 20,30],
    [40, 50, 60,60,40, 50, 60,60,],
    [70, 80, 90,70, 80, 90]
]

let revemoveDulicateArray = newMatrix_rm_dp_arr.flat() ;
//let uniqnewMatrix = [... new Set (newMatrix_rm_dp_arr.flat())]
let uniqnewMatrix = [... new Set (revemoveDulicateArray)]
console.log(uniqnewMatrix);
console.log('-------------------------------------');



const matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]


console.log('Revere One Integer:',matrix[0][1].toString().split('').reverse().join(''));
console.log('-------------------------------------');

console.log('One Element Row Print:',matrix[1]);
console.log('-------------------------------------');


for (let PrintMatrix = 1; PrintMatrix < matrix.length; PrintMatrix++) {
    console.log('Print Element One Row with Loop:',matrix[PrintMatrix]);
    console.log('-------------------------------------');
    break;
}



for (let PrintMatrix = 0; PrintMatrix < matrix.length; PrintMatrix++) {
    if (PrintMatrix ===0 ) {
        console.log('Print Element One Row with Loop and If :',matrix[PrintMatrix].reverse());
        console.log('-------------------------------------');
        break;
    }
}



for (let PrintMatrix = matrix.length-1; PrintMatrix>=1; PrintMatrix--) {
    if (PrintMatrix ===1) {
        let revereInteger = matrix[PrintMatrix] [0]
        let IntegerSum = revereInteger.toString().split('').reverse().join('')
        console.log('Reveres One Integer:', IntegerSum);
        console.log('-------------------------------------');

    }
}



for (let AllmatrixReversePrint = matrix.length-1; AllmatrixReversePrint>0; AllmatrixReversePrint--) {
    console.log('Reverse All Element', matrix[AllmatrixReversePrint].reverse());
    console.log('-------------------------------------');
}


for (let PrintIndex90 = matrix.length-1; PrintIndex90>=0 ; PrintIndex90--) {
    if (PrintIndex90 === 2) {
        let sumreverse = matrix[PrintIndex90] [0]
        let sumInteger = sumreverse.toString().split('').reverse().join('');
        console.log('ReveSer Particular Index Integer',sumInteger);
        console.log('-------------------------------------');
        break;
    }
    
}



for (let addOneElement = 0; addOneElement < matrix.length; addOneElement++) {
    if (addOneElement ===0) {
        matrix[addOneElement].splice(2,0, 200);
        //matrix[addOneElement].push(90000);
        //matrix[addOneElement].unshift();
        //matrix[addOneElement].pop();
        //matrix[addOneElement].shift();
        console.log(matrix[addOneElement]);
        console.log('-------------------------------------');
        break;
    }
}