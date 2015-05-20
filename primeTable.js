var primeGenerator = function(n){
  // Generates and returns the first n prime numbers (including 1)
  // 1 is included for the purpose of generating the table.
  var primeNum = [];
  if(n === 0){
    return primeNum;
  } else if(n === 1){
    primeNum.push(1);
    return primeNum;
  } else if(n === 2){
    primeNum.push(1);
    primeNum.push(2);
    return primeNum;
  } else{
    // n > 1
    primeNum = primeGenerator(n - 1);
    var candidate = primeNum[n - 2];
    var primeFlag = false;
    while(!primeFlag){
      candidate++;
      var isPrime = true;
      for (var i = 1; i < primeNum.length; i++){
        if(candidate % primeNum[i] === 0){
          isPrime = false;
          break;
        }
      }
      if(isPrime === true){
        primeFlag = true;
      }
    }
    primeNum.push(candidate);
    return primeNum;
  }
};


var primeTableGenerator = function(n){
  // Generates the multiplication table
  var primeTable = [];
  var primeNum = primeGenerator(n);

  primeTable[0] = primeNum.splice(0);

  for(var i = 1; i < n; i++){
    primeTable[i] = [];
    primeTable[i].push(primeTable[0][i]);
    for(var j = 1; j < n; j++){
      primeTable[i][j] = primeTable[i][0] * primeTable[0][j];
    }
  }
  console.log('Table for n = ', n);
  console.table(primeTable);
  return primeTable;
}