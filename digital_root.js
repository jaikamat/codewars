// 6 kyu

function digital_root(n) {
    let sum = n;
    
    while (sum > 9) {
      let str = '' + sum;
      sum = str.split('').reduce((a,b) => parseInt(a)+ parseInt(b));
    }
    
    return parseInt(sum);
}