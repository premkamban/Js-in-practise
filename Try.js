function ams(arr) {
    const temp = [];
    var i = arr.length - 1;
    do {
        let sum = 0;
        for (var ar in arr) {
            sum += arr[ar];
        }
        console.log("sum result");
        console.log(sum);
        temp.push(sum);
        arr = arr.splice(0, i);
        console.log("length of array");
        console.log(arr.length);
        i--;
    } while (i >= 0);
    console.log(temp.reverse());
    return temp.reverse();
}

ams([1, 2, 3, 4, 5]);
