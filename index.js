function powersOfTwo(n){
    let result = [];
    let z = 2;
    for (let i = 0; i<n || i <= 0+n; i++) {
    result.push(z**i);
    }
    return console.log(result);
  }

powersOfTwo(1);