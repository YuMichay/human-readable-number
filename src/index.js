module.exports = function toReadable (number) {
  const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arrDozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  let result = '';
  const doz = Math.floor(number/10);
  const num = number%10;
  const hun = Math.floor(number/100);
  const numDoz = Math.floor((number%100)/10);
  if (number < 20) {
      return result = arr[number];
  } else if (number >= 20 && number < 100){
      return result = (arrDozens[doz] + ' ' + arr[num]);
  } else if (number === 100) {
      return result = 'one hundred';
  } else if (number > 100 && number < 200 && number%10 === 0){
      return result = (arr[hun] + ' ' + 'hundred' + ' ' + arrDozens[numDoz]);
  }else if (number >= 200 && number%10 === 0){
      return result = (arr[hun] + ' ' + 'hundreds' + ' ' + arrDozens[numDoz]);
  } else {
      return result = (arr[hun] + ' ' + 'hundreds' + ' ' + arrDozens[numDoz] + ' ' + arr[num]);
  }
};
