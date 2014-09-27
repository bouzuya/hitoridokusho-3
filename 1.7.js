var f = function(matrix) {
  var rowsLength = matrix.length;
  var columnsLength = matrix[0].length;
  var rows = matrix.map(function(row, i) {
    return { row: row, index: i };
  }).filter(function(row) {
    return row.row.some(function(col) { return col === 0; });
  }).map(function(row) {
    return row.index;
  });
  var columns = matrix.reduce(function(columns, row) {
    var i = 0;
    for (i = 0; i < columnsLength; i++) {
      columns[i] = (columns[i] || row[i] === 0);
    }
    return columns;
  }, new Array(columnsLength)).map(function(column, i) {
    return { column: column, index: i };
  }).filter(function(column) {
    return column.column;
  }).map(function(column) {
    return column.index;
  });

  var i = 0;
  var j = 0;
  for (i = 0; i < rowsLength; i++) {
    for (j = 0; j < columnsLength; j++) {
      if (rows.indexOf(i) !== -1 || columns.indexOf(j) !== -1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

var assert = require('assert');

assert.deepEqual(f([[1]]), [[1]]);
assert.deepEqual(f([
  [1, 0],
  [1, 1]
]), [
  [0, 0],
  [1, 0]
]);

assert.deepEqual(f([
  [1, 1],
  [1, 1]
]), [
  [1, 1],
  [1, 1]
]);

assert.deepEqual(f([
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
]), [
  [1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
])
