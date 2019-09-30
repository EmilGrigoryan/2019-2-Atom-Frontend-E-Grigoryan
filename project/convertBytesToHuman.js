/*
 * Функция `convertBytesToHuman` должна принимать
 * аргумент `bytes` только числового типа.
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */
// export default
function convertBytesToHuman(bytes) {
  // your solution goes here
  if (typeof(bytes) === 'number')
  {
    if (bytes != NaN)
      if (bytes >= 0)
        return bytes
    return false
  }
  else  
    return false
}
console.log(convertBytesToHuman(0xffa))