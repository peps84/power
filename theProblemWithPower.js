// x(n) + y(n) = z(n)

var answers = [];

function produceAndFindPoweredValue(num, powerOf, limit) {
  console.log('Find the powered sum of ' + num + '('+powerOf+') = '+ Math.pow(num, powerOf));
  findPoweredSum(Math.pow(num, powerOf), powerOf, limit);
}


function findPoweredSum(result, toPowerOf, limit) {

  for(var x = 1; x < limit; x++){

    for(var y = 1; y < limit; y++){

      var currentResult = Math.pow(x, toPowerOf) + Math.pow(y, toPowerOf);

      // console.log('Checking ' + x + ' to the power of ' + toPowerOf);
      // console.log(Math.pow(x, toPowerOf) +' + ' + Math.pow(y, toPowerOf) + ' = ' + currentResult);

      if (currentResult === result) {
        answers.push('' + x + '('+toPowerOf+') + ' + y + '('+toPowerOf+') = ' + currentResult +'');

      }

    }
  }

  console.log(answers);
}

produceAndFindPoweredValue(1, 2, 100);


// Testing
// console.log('Testing')
// findPoweredSum(8, 2, 100); // Result expected 2(2) + 2(2) = 8
// findPoweredSum(128, 2, 100); // Result expected 8(2) + 8(2) = 128