module.exports = function reverse(n) {
  let number = Math.abs(n);
  let str = String(number);
  let arr = str.split('');
  let arrReverse = arr.reverse();
  let result = arrReverse.join('');
  return Number(result);

}
