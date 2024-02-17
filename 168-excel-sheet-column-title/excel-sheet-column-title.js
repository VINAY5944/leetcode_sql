/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let res = '';

    while (columnNumber > 0) {
        let r = columnNumber % 26;
        let q = parseInt(columnNumber / 26);
        if (r === 0) {
            r = 26;
            q--;
        }

        res = String.fromCharCode(64 + r) + res;
        columnNumber = q;
    }
    return res;
}