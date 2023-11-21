/*
// Counter from 1 to 10
console.log ("Counter");
function counter(){
    for (let i = 0; i <=10; i++){
        console.log(i)
}}
counter()
// Array of odd numbers
console.log("Odd Numbers")
function oddNums(){
    let oddArr  = []
    for (let i = 0; i <=10; i++){
        if (i % 2 !== 0){
            oddArr[oddArr.length] = i;
        }
    }
    console.log(oddArr)
}
oddNums()

// Sum of sums
console.log("sum of Nums")
function sumOfNums(){
    let sumNum = (0);
    for (i = 0; i<= 10; i++){
        sumNum +=i;
        console.log(i, sumNum)
    }
}
sumOfNums()

// add into array
console.log("add to Array")
function addArray(){
    let addArr = [];
    for (i=0; i<=10; i++){
        addArr[i] = i;
    }
    console.log(addArr)
}
addArray()


//Find and Print Max number
console.log("find the Max number")
// Jason Jones says use a loop to go throught the Array
// Then use if statements, having a vari = 0 as a bench marked, then comparing the array to the bench mark
// if the value is true/ higher, we could update the benchmark
let arrMax = [1, 3, 22, 8, 10, 4,34];
function findMax(arr){
    let highestNum = arr[0]
    for (i= 0; i < arr.length; i++){
        if (arr[i] > highestNum){
            highestNum = arr[i];
        }
    }
    console.log(highestNum)
    
}
findMax(arrMax)
findMax()

console.log("FindMin")
let arrMin = [2, 3, 22, 8, 10, 1];
let arrMin1 = [6, 13, 20, 4, 44];
function findMin(arr){
    let lowestNum = arr[0];
    for (let i= 0; i < arr.length; i++){
        if (arr[i] < lowestNum){
            lowestNum = arr[i];
        }
        
    }
    console.log(lowestNum)
}
findMin(arrMin)
findMin(arrMin1)
/*
// average of an array
console.log("average array")
averageArra =[1,2,5,7,10]
console.log(averageArra)
// average is 25
function avgArry(){
    avgnum = 0;
    for(i= 0; i <= averageArra.length -1; i++){
        avgnum += averageArra[i];
    }
    avgnum /= averageArra.length
    console.log(avgnum)
}
avgArry()

// Array of odd numbers
console.log("Odd Numbers")
let arr = []
function oddNums(arr){
    for (let i = 0; i <= 10; i++){
        if (i % 2 !== 0)
        {
            arr[arr.length] = i;
        }
    }
    return arr
}
console.log(oddNums(arr))

// Sqauare values from Aarry
console.log("Values Squared")
let sqarray = [4,7,8,1,9];
console.log(sqarray);
function squareNums(sqarray){
    let sq2 =[];
    for (let i=0; i< sqarray.length; i++){
        let sq1 = sqarray[i]**2;
        sq2[sq2.length] = sq1;
    }
    console.log(sq2);
}
squareNums()

*/
console.log("greater than Y")
// Greater than Y
let garr = [4,7,8,1,2,10];
let y = 3;
console.log(garr, "Threshold: ", y);
function greaterThanY(){
    let z =[];
    for (i = 0; i < garr.length; i++)
    {
        if (garr[i] > y){
            z[z.length]= garr[i];
        }
    }
    console.log(z);
}
greaterThanY()
/*
let array = [5,-5,2,-2, 10]
function zeroOutNegative(array)
{
    for(i = 0; i < array.length; i++)
    {
        if (array[i] <= 0)
        {
            array[i] = 0;
        }
    }
    return array
}
console.log(zeroOutNegative(array))
//MinMaxAvg
console.log("MinMaxAvg")
theArr = [2, 3, 22, 8, 10, 4];
function MinMaxAvg(theArr){
    for (let i = 0; i < theArr.length; i++){
        let theMin = theArr[0]
        let theMax = theArr[0]
        // Min first
        if (theArr[i] > theMax){
            theMax = theArr[i];
            return theMax
        }
    }
}
console.log(MinMaxAvg(theArr))
*/