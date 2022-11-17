export class Util {
  static make2DArray = (cols, rows) => {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }

  static createSpots = (spots, cols, rows) => {
    const arr = this.make2DArray(cols, rows)

    let c = 0;
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        arr[i][j] = spots[c];
        c++
      }
    }
    return arr;
  }
}