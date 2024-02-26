
var Number=[1,32,3,4,5,2]
Number.slice()
console.log(Number)
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(Object.keys(person));
  console.log(Object.values(person));
  console.log(Object.entries(person));
  console.log(Object.getOwnPropertyNames(person));
  function greet(name) {
    return 'Hello, ' + name + '!';
    }
    console.log(greet())
    const greets = function(name) {
        return 'Hello, ' + name + '!';
        };
        console.log(greets());
    (function() {
            console.log('I am immediately invoked.');
            })()
    var arr =[1,2,3,4,5,6,7,8,9,10]
    function doubled(arr){
        num=[];
        for ( var i=0;i<arr.length;i++){
      num[i]= 2*arr[i];}
    }
    console.log(doubled(arr))