var ary = [1,2,3,4,5,6,7];

ary.forEach(function(item, index, array){
  console.log(index);
  if(item == 3){
    array.splice(index, 1);
  }
})

console.log(ary);