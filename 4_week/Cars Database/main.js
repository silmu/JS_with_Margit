class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
  discount() {
    const price = this.price;
    let discount = '';
    if (price < 5000) discount = '10%';
    else if (price >= 5000 && price <= 20000) discount = '15%';
    else if (price > 20000) discount = '25%';
    return discount;
  }
}

//Table
const table = document.querySelector('.cars_table');
//Array for table of cars
const arrCars = [];

// Adding values to the array
const btn = document.querySelector('#btn_add');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  // Reading values from input form
  const license = document.querySelector('#license').value;
  const maker = document.querySelector('#maker').value;
  const model = document.querySelector('#model').value;
  const owner = document.querySelector('#owner').value;
  const price = document.querySelector('#price').value;
  const color = document.querySelector('#color').value;

  //Creating new Car object
  const car = new Car(license, maker, model, owner, price, color);
  //Creating a table row
  let row = table.insertRow(1);
  row.insertCell(0).textContent = car.license;
  row.insertCell(1).textContent = car.maker;
  row.insertCell(2).textContent = car.model;
  row.insertCell(3).textContent = car.owner;
  row.insertCell(4).textContent = car.price;
  row.insertCell(5).textContent = car.color;

  arrCars.push(car);
});

//Search
const searched = document.querySelector('#searched');
const search = document.querySelector('#search');
const output = document.querySelector('.result');

search.addEventListener('click', () => {
  console.log(arrCars);
  let result = arrCars.filter((car) => {
    if (car.license === searched.value) {
      output.textContent = `License: ${car.license}, maker: ${
        car.maker
      }, model: ${car.model}, owner: ${car.owner}, price: ${
        car.price
      }, color: ${car.color}, discount: ${car.discount()}`;
      return car;
    }
  });
  result.length === 0 ? (output.textContent = 'Not found') : '';
  console.log(result);
});
