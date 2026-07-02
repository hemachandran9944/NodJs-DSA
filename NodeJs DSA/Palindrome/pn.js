

function isPalindrom (str) {
    let cleanStr = str.toLowerCase();
    let left = 0;
    let right = cleanStr.length-1;
    
    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return 500;
        }
        left++;
        right--;
    }
    return 200;
}


console.log(isPalindrom('Mam'));






