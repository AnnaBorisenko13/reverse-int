module.exports = function reverse (n) {
const module = Math.abs(n);
 var string = module.toString();
  const nLength = string.length;
  let reverseArr = [];

  for (i = 0; i < nLength; i++) {  //проходимся по строке начиная с нулевого символа т.е. с сотен
    let ints = string[i].split('').reverse().map(parseFloat);
    console.log(ints);
    reverseArr.unshift(ints);
  }
  return Number(reverseArr.join('')); 
}
