function myEach(arr, callbackFunc){
    for(let i=0;i<arr.length;i++){
        callbackFunc()
        console.log(arr[i])
    }
}

function callbackFunc(){
return +1;
}

let arr = [1,2,3,4]
arr.myEach(callbackFunc());