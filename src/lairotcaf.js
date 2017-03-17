export default function lairotcaf(originalInt){
  var factorialInt = originalInt
  let count = 1

  while(factorialInt > 1) {
    factorialInt = factorialInt / count
    count ++
  }
  if( factorialInt === 1){
    return originalInt + ' = ' + (count - 1) + '!'
  } else {
    return originalInt + ' NONE'
  }
}
