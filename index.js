//Global stuff

var numbers = [1,2,3,4,5];

function callBack(anEntry){
  return console.log(anEntry)
}

const obj1 = {
    num: 1,
    wordVal: 'One'
}

//Q1

function myEach(callBack)
{
  const newNum = [];
    for(let i =0; i<numbers.length; i++){
        newNum.push(numbers[i]);
    }
  return callBack(newNum)
}
myEach(callBack)


//Q2
function myMap(arr, callBack){
    const newMap=[]
    for(let i=0;i<numbers.length;i++){
        newMap[i]=numbers[i]
    }    
    return callBack(newMap)
}
myMap(numbers,callBack)

//Q3
function myFilter(arr, callBack){
    const newArr=[]
    let count =0
    for(let i=0;i<numbers.length;i++)
    {
        if(numbers[i]>=3){
            newArr[count]=numbers[i]
            count++
        }
    }
    return callBack(newArr)
}

myFilter(numbers,callBack)

//Q4
function mySome(callBack,arr){
    let ToF = true
    for(let i=0;i<numbers.length;i++){
        if(numbers[i] % 2 == 0) {
            return callBack(ToF)
        }
    }
    return callBack(ToF=false)
}

mySome(callBack,numbers)

//Q5
function myEvery(callBack, arr){
    let ToF =true;
    for(let i=0;i<numbers.length;i++){
        if(!arr[i]% 2==0){
            ToF = false
            return callBack(ToF)
        }
    }
    return callBack(ToF)
}

myEvery(callBack,numbers)

//Q6 NEEDS TO BE WORKED ON
function myReduce(callBack,arr){
    let sum=0
    for(let i=1;i<numbers.length;i++){
        sum = arr[i] + arr[i-1]
    }
    return callBack(sum)
}

myReduce(callBack,numbers)

//Q7
function myIncludes(callBack,arr, num){
    let ToF = true
    for(let i=0;i<numbers.length;i++){
        if(arr[i]==num){
            return callBack(ToF)
        }
    }
    return callBack(ToF=false)
}

myIncludes(callBack,numbers,3)

//Q8
function myIndexOf(callBack,arr,num){
    for(let i=0;i<numbers.length;i++){
        if(arr[i]==num)
            return callBack(i)
    }
    return callBack(-1)
}

myIndexOf(callBack,numbers,3)

//Q9
function myPush(callBack,arr,num){
    arr[arr.length]=num

    return callBack(arr.length)
}

myPush(callBack,numbers,8)

//Q10
function myLastIndexOf(callBack,arr,num){
    for(let i=arr.length;i>=0;i--){
        if(arr[i]==num){
            return callBack(i)
        }
    }
    return callBack(-1)
}

myLastIndexOf(callBack,numbers,5)

//Q11
function grabKeys(callBack,obj){
let keysArr=[]
for(element in obj){
    keysArr.push(element)
}
return callBack(keysArr)
}

grabKeys(callBack,obj1)

//Q12
function grabValues(callBack, obj){
    let valArr=[]
    for(element in obj){
        valArr.push(obj[element])
    }
    return callBack(valArr)
}

grabValues(callBack,obj1)
