var numbers = [10,32,341,3,1,6];

function myEach()
{
  const newNum = [];
    for(let i =0; i<numbers.length; i++){
        newNum.push(numbers[i]);
    }
  return newNum;
}
console.log(myEach());
