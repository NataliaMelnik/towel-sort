
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined || matrix === null) {
    return [];
  }
  let result = matrix.map((item, index) => {
    if (index % 2 === 0) {
      return item;
    } else {
      return item.reverse();
    }
  });
  return result.flat(Infinity);
}
