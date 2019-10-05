/*
You are given a non-empty list of integers (X).

For this task, you should return a list consisting of
only the non-unique elements in this list.

To do so you will need to remove all unique elements
(elements which are contained in a given list only once).

When solving this task, do not change the order of the list.

Example:

input (array of integers): [1, 2, 3, 1, 3]
output (iterable of integers): [1, 3, 1, 3]

1 and 3 are non-unique elements.

More examples:

nonUniqueElements([1, 2, 3, 1, 3]) == [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) == []
nonUniqueElements([5, 5, 5, 5, 5]) == [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) == [10, 9, 10, 10, 9]
 */
export default
function nonUniqueElements(data) {
  // your solution goes here
  let dict = {}
  for (let i = 0; i < data.length; ++i)
  {
      if (!(data[i] in dict))
      {
        dict[data[i]] = 0
      }
        dict[data[i]] += 1
  }
  // console.log(dict)
  for (let i in dict)
  {
    if (dict[i] == 1)
    {
      for (let j = 0; j < data.length; ++j)
      {
        if (data[j] == i)
          data.splice(j, 1)
      }
    }
  }
  return data
}



