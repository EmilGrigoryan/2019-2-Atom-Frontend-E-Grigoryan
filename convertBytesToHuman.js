/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default

// function index_search(size, bytes)
// {
//   for (let i = 0; i < size.length - 1; ++i)
//   {
//     if ((bytes >= size[i])&&(bytes < size[i+1]))
//       return i
//   }
//   return size.length - 1;
// }

// function size_write(b_length)
// {
//   let buf_size = []
//   buf_size.push(1)
//   for (let i = 0; i < b_length ;++i)
//   {
//     buf_size.push(Math.pow(1024, i+1))
//   }
//   return buf_size
// }

// function convertBytesToHuman(bytes) {
//   // your solution goes here
//   let names = ["B", "Kb", "Mb", "Gb", "Tb", "Pb"]
//   let size = []
//   size = size_write(names.length - 1)
//   if ((typeof(bytes) === 'number')&&(bytes != NaN))
//   {
//       if (bytes > 0)
//       {
//         index = index_search(size, bytes);
//         bytes = bytes/(size[index])
//         return `${bytes.toFixed(2)} ${names[index]}`
//       }
//       else if (bytes == 0)
//       {
//         return 0;
//       }
//     return false
//   }
// return false
// }
// console.log(convertBytesToHuman(new Number(100)))



function convertBytesToHuman(bytes) {
  // your solution goes here
  let names = ["B", "Kb", "Mb", "Gb", "Tb", "Pb"]
  let size = []
  size.push(1)
  for (let i = 0; i < names.length - 1 ;++i)
  {
    size.push(Math.pow(1024, i+1))
  }
  if ((typeof(bytes) === 'number')&&(bytes != NaN))
  {
      if (bytes > 0)
      {
        let index = -1
        for (let i = 0; i < size.length - 1; ++i)
          if ((bytes >= size[i])&&(bytes < size[i+1]))
            index = i
        if (index == -1)
            index = size.length - 1
        return `${(bytes/(size[index])).toFixed(2)} ${names[index]}`
      }
      else if (bytes == 0)
        return 0
  }
  return false
}
// console.log(convertBytesToHuman(1125899906842624))
