let form = document.querySelector('form');

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');

let direction = document.querySelectorAll('input[name="direction"]');

const setGradient = () => {
  console.log(color1.value);
  console.log(color2.value);

  let selectedValue;

  for (const sel of direction) {
    if (sel.checked) {
      selectedValue = sel.value;
    }
  }
  console.log(selectedValue);

  //   for (let i = 0; i < direction.length; i++) {
  //     if (direction[i].checked) {
  //       console.log(direction[i].checked);
  //       direction = direction[i].value;
  //       console.log(direction);
  //     } else {
  //       console.log('Error.');
  //     }
  //   }

  document.body.style.backgroundImage =
    //'linear-gradient(' + color1.value + ',' + color2.value + ')';
    `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`;
  console.log(
    `linear-gradient(${selectedValue}, ${color1.value}, ${color2.value})`
  );
};
//On change setGradient is triggered
addEventListener('change', setGradient);
