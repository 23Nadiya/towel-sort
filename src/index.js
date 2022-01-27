module.exports = function towelSort(matrix) {
    if (matrix === undefined) {
        return [];
    }
    let arr = [];
    for (let i = 0; i < matrix.length; i += 1) {
        if (i % 2 === 0) {
            arr = arr.concat(matrix[i]);
        } else if (i % 2 !== 0) {
            let rever = matrix[i].reverse();
            arr = arr.concat(rever);
        }
    }
    return arr;
};
