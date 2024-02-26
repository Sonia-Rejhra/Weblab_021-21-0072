arr =[1,2,3,4,5,6,7,8,9,10]

arr.forEach(function(item){
  console.log(item);
  return 2*item;
})
var b=arr.filter(function(item){
    if(item %2==0 ){
        return item;
    }
})
console.log(arr.filter(item => !(item%2)));
arr=["Muskan","Sonia","Koyal","Prena"]
console.log(arr.filter(item => item.include('a')));