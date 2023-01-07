function minusThree(array) {
    return array.length <= 3 ? [] : array.slice(3);
}

array1 = [1,2,3,4,5,6,7];
array2 = [9,5,84];
array3 = [7,5,4,3,8];
array4 = [45];

console.log(minusThree(array1));
console.log(minusThree(array2));
console.log(minusThree(array3));
console.log(minusThree(array4));
