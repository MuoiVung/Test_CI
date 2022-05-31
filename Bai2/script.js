function triangle(rows) {
    if (rows < 1 || rows > 10) {
        alert('rows is invalid!');
        return;
    }

    let result = '';
    for (let i = 0; i <= rows; i++) {
        if (i === rows) {
            result += '*'.repeat(i) + '\n';
        } else {

            result += '*'.repeat(i) + '\n';
        }
    }
    return result;
}

const rows = Number.parseInt(prompt('Please enter rows: '));
console.log(triangle(rows));
