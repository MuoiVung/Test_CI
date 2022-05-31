const kiemTraSNT = function (n) {
    if (n < 2) {
        return false;
    }

    if (n === 2) {
        return true;
    }

    if (n % 2 === 0) {
        return false;
    }

    for (let i = 3; i < n / 2; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
};

const inCacSNT = function () {
    const a = Number.parseInt(prompt('Nhập vào số a: '));
    const b = Number.parseInt(prompt('Nhập vào số b: '));
    if (a < b) {
        for (let i = a + 1; i < b; i++) {
            if (kiemTraSNT(i)) {
                console.log(i + ' ');
            }
        }
    }
    else {
        for (let i = b + 1; i < a; i++) {
            if (kiemTraSNT(i)) {
                console.log(i + ' ');
            }
        }
    }
};

inCacSNT();

