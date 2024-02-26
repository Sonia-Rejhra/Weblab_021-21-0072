let car={
  brand : "Toyota",
  model : "Camry",
  year : 2022
};

function carInfo(car){
  return 'The ${car.brand} ${car.model} was manufactured in ${car.year}.'
}

console.log(carInfo(car));