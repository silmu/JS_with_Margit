class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}
//Table
const table = document.querySelector('.cars_table');
//Array for table of cars
const arrCars = [];

// Adding values to the array
const btn = document.querySelector('#btn_add');

btn.addEventListener('click', () => {
  // Reading values from input form
  const license = document.querySelector('#license').value;
  const maker = document.querySelector('#maker').value;
  const model = document.querySelector('#model').value;
  const owner = document.querySelector('#owner').value;
  const price = document.querySelector('#price').value;
  const color = document.querySelector('#color').value;

  //Creating new Car object
  const car = new Car(license, maker, model, owner, price, color);

  let row = table.insertRow(1);
  row.insertCell(0).textContent = car.license;
  row.insertCell(1).textContent = car.maker;
  row.insertCell(2).textContent = car.model;
  row.insertCell(3).textContent = car.owner;
  row.insertCell(4).textContent = car.price;
  row.insertCell(5).textContent = car.color;

  console.log(car);
  arrCars.push(car);
  console.table(arrCars);
});
