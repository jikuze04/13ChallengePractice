/*
// Print 1 to 10
console.log('1. Counter')
function printNums(cap){
    for (let i = 0; i <=cap; i++){
        console.log(i)
    }
}
printNums(10)
*/
//print odd numbers
console.log("2. the Odds of this happening")
function printTheOdds(theOdds){
    for(let i = 0; i <= theOdds; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}
printTheOdds(10)
/*
// print the int and sum
console.log("3. TheIntandSum")
function intAndSum(maxCap){
    let intSum = 0;
    for(let i = 0; i<maxCap; i++){
        intSum += i;
        console.log(i,intSum)
    }
}
intAndSum(10)
*/
let theArr = [2,3,10,44,12,1]
/*
//Print an Arry
console.log("4. Print the Array")
function printTheArry(arr){
    for (let i = 0; i <= arr.length-1; i++){
        console.log(arr[i]);
    }
}
printTheArry(theArr)

//Find the Max
console.log("Find the Max")
function findTheMax(arr){
    let maxInt = arr[0];
    for (let i=0; i < arr.length; i++){
        if (arr[i] > maxInt){
            maxInt = arr[i];
        }
    }
    console.log(maxInt)
}
findTheMax(theArr)

//Find the Min
console.log('5. Find the Min')
function findTheMin(arr){
    let minInt = arr[0];
    for(let i=0;i< arr.length ;i++){
        if(arr[i] < minInt){
            minInt = arr[i];
        }
    }
    console.log(minInt)
}
findTheMin(theArr)

//Find the Average Array
console.log('Average Array')
function Averagearry (arr){
    let sumArray = 0 ;
    for (let i=0; i<arr.length;i++){
        sumArray += arr[i];
    }
    sumArray /= arr.length;
    console.log(sumArray)
}
console.log(`Array: ${theArr}`)
Averagearry(theArr)

console.log("create an odd Array")
function printTheOdds(oddCap){
    let oddArray =[]
    for(let i = 0; i <= oddCap; i++){
        if(i % 2 !== 0){
            oddArray[oddArray.length] = i;
        }
    }
    return oddArray;
}
console.log(printTheOdds(25))
*/
//Sqaure Array
console.log('squared Array')
function squaredArray(arr){
    //sqd =[]
    for (let i=0; i < arr.length; i++){
        arr[i] = arr[i]**2;
    }
    return arr;
}
console.log(theArr)
console.log(squaredArray(theArr))
/*
theArr = [2,3,10,44,12,1]
//Greater than Y
console.log('Greater than Y')
function greaterThanY(arr,y){
    let higherthanY =[];
    for(let i = 0; i <arr.length; i++){
        if (arr[i] > y){
            higherthanY[higherthanY.length] = arr[i];
        }
    }
    return higherthanY;
}

console.log(greaterThanY(theArr,9))

// Negative Aarry Cancel
*/
let negArr = [2,-5,10,13,-99,100]
/*
console.log('Remove Negative Array')
function removeNegative(arr){
    for(let i = 0; i <arr.length; i++){
        if (arr[i] <= 0){
            arr[i] = 0;
        }
    }
    return negArr
}
console.log(removeNegative(negArr))

//MinMaxAvg
console.log("MinMaxAvg")
function MinMaxAvg(arr){
    let max1 = arr[0]
    let min1 = arr[0]
    let avg1 = 0
    for (let i=0; i <=arr.length;i++){
        if (arr[i] > max1){
            max1 = arr[i];
        };
        if(arr[i] < min1){
            min1 = arr[i];
        };
        avg1 += arr[i];
    }
    avg1 /= arr.length;
    console.log(min1,max1,avg1)
}
MinMaxAvg(theArr)

// Shift the arrary
console.log('Shift the Array')
function shiftarry(arr){
    for (let i =0; i < arr.length-1 ;i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = 0;
    return arr;
}
console.log(theArr)
console.log(shiftarry(theArr))

// Negtive to Dojo
console.log('Negative to Dojo')
function negativeDojos(arr){
    for(let i = 0; i <= arr.length; i++)
    if (arr[i] <= 0){
        arr[i] = 'DOJO!'
    }
    return negArr;
}
console.log(negArr)
console.log(negativeDojos(negArr))

*/