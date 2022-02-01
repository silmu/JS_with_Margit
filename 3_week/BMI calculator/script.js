const calculate = (event) => {
  let weigth = Number(document.querySelector('#weigth').value);
  let height = Number(document.querySelector('#height').value) / 100;
  let answer = document.querySelector('#answer');

  let bmi = Number(weigth / (height * height)).toFixed(1);

  //Check if overweight, underweight or normal weight
  let text;
  console.log(bmi);

  if (bmi < 18.5) {
    text = 'underweight';
    color = 'warning';
    console.log('underweight');
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    text = 'normal or healthy weight';
    color = 'normal';
    console.log('normal');
  } else if (bmi >= 25.0 && bmi < 30) {
    text = 'pre-obesity';
    color = 'warning';
    console.log('pre-obesity');
  } else if (bmi >= 30) {
    text = 'obesity';
    color = 'danger';
    console.log('obesity');
  } else {
    text = 'error';
    console.log('error');
  }
  //Print the answer to the screen
  answer.textContent = `Your BMI is ${bmi}: ${text}.`;
  answer.classList.add(color);

  console.log('Weight: ' + weigth);
  console.log('Height: ' + height);
  console.log('BMI: ' + bmi + ' ' + text);
};
