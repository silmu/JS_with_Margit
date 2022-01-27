const calculate = () => {
  let price = Number(document.getElementById('price').value);
  let money = Number(document.querySelector('#money').value);

  let answer = document.querySelector('#answer');
  let amount = Math.floor(money / price);

  let text;
  amount >= 10
    ? (text =
        'You can afford ' +
        amount +
        ' liters of gasoline. Good, now you can escape.')
    : (text =
        'You can afford ' +
        amount +
        ' liters of gasoline. Oops, you have to stay here.');

  answer.textContent = text;

  console.log('Price: ' + price);
  console.log('Money: ' + money);
  console.log('Result: ' + amount);
};
