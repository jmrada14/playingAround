const binarySearch = (numbersArr, searchElement) => {
    let currentElement;
    let currentIndex;
    let maxIndex = numbersArr.length - 1;
    let minIndex = 0;

    while (minIndex <= maxIndex) {

        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = numbersArr[currentIndex];

        if (currentElement < searchElement) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > searchElement) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return false;
};

let result = binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], 5);
console.log(result);
