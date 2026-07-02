
// Malayalam

function isPalindrom (str) {

    let cleanStr = str.toLowerCase();
    let left = 0; 
    let right = cleanStr.length-1;

    while(left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return 500; //false;
        }
        left++;
        right--;
    }
    return 201;  //true;
}


console.log(isPalindrom('mam'));