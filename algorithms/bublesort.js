const bubbleSort = (items) => {
    let length = items.length;
    for (let i = (length - 1); i > 0; i--) {
        for (let j = (length - i); j > 0; j--) {
            if (items[j] < items[j - 1]) {
                let tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
};

let ar=[5,6,7,8,1,2,12,14];

bubbleSort(ar);
console.log(ar);
