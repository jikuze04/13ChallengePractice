// print 1-255
console.log("print 1-255");
function counter(cap){
    for(let i = 0; i <= cap; i++){
        console.log(i);
    }
}
//counter(255)

//print the odds
console.log('print the odds')
function oddCounters(cap){
    for(let i=0; i <= cap; i++){
        if (i%2 !== 0){
            console.log(i)
        }
    }
}
//oddCounters(255)

//print its interger and its sum
console.log('print int and sum');
function intAndSum(limit){
    let sum = 0;
    for (let i=0; i <= limit;i++){
        sum += i;
        console.log(i,sum);
    }
}
//intAndSum(255)

//iterate and print array

theArray = [10,-9,1,8,99,-25,100];
console.log(theArray);

console.log('Print the array')
function printTheArr(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
//printTheArr(theArray)

//Find the Max
console.log('Find the Max')
function printTheMax(arr){
    let max = arr[0];
    for (let i=0; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
//console.log(printTheMax(theArray))

//get the Avg
console.log('Get the average of array')
function getAvg(arr){
    let sumAvg = 0;
    for (let i=0; i<arr.length;i++){
        sumAvg += arr[i];
    }
    sumAvg /= arr.length;
    return sumAvg;
}
console.log(getAvg(theArray))

//create an array w/ odd nums
console.log('Create an Arry with odd Nums')
function arrayOdds(cap){
    let arrOdds = [];
    for (let i=0; i<=cap;i++){
        if(i%2 !==0){
            arrOdds[arrOdds.length] = i;
        }
    }
    return arrOdds;
}
//console.log(arrayOdds(255))

//square the Array
console.log('Squared the array')
function sqArray(arr){
    for(let i=0;i <arr.length; i++){
        arr[i]=arr[i]**2;
    }
    return arr;
}
//console.log(sqArray(theArray))

//print the array greater than Y
console.log('Greater than Y')
function arrayThanY(arr,Y){
    let newArr = []
    for (let i=0;i<arr.length;i++){
        if (arr[i] > Y){
            newArr[newArr.length] = arr[i];
        }
    }
    return newArr;
}
console.log(theArray)
//console.log(arrayThanY(theArray, 7))

// Zero out the negative Arrary
console.log('Zero the negative Array')
function negativeArray(arr){
    for(let i= 0;i<arr.length;i++){
        if (arr[i]<0){
            arr[i] = 0;
        }
    }
    return arr;
}
//console.log(negativeArray(theArray))

//Min,Max,Avg
console.log('Min,Max,Avg')
function minMaxAvg(arr){
    let min = [0];
    let max = [0];
    let avg = 0;
    for (let i=0; i < arr.length;i++){
        //Min
        if (arr[i]<min){
            min = arr[i];
        }
        if (arr[i]>max){
            max=arr[i];
        }
        avg += arr[i];
    }
    avg /= arr.length;
    console.log(min,max,avg);
}
//minMaxAvg(theArray)

//Shift the arrary
console.log('shift the array')
function shiftingTheArray(arr){
    for (let i =0; i< arr.length-1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] =0;
    return arr;
}
console.log(shiftingTheArray(theArray))

//Negative to Dojo
console.log('Negative to Dojo')
function negativeToDojo(arr){
    for (let i=0; i < arr.length; i++){
        if (arr[i]<0){
            arr[i] = "Dojo"
        }
    }
    return arr;
}
console.log(theArray);
console.log(negativeToDojo(theArray))