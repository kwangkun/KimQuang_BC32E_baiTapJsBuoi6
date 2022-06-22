// Bài 1:
document.getElementById('btnB1').onclick = function () {
    // Input: null

    // Output: string
    var ketQuaC = '';
    var ketQuaL = '';
    var htmlStrC = '';
    var htmlStrL = '';

    // Process:
    for (var count = 0; count < 100; count++) {
        if (count % 2 == 0) {
            htmlStrC += count + ' ';
        } else if (count % 2 != 0) {
            htmlStrL += count + ' ';
        }
    };
    ketQuaC = 'Số chẵn: ' + htmlStrC;
    ketQuaL = 'Số lẻ: ' + htmlStrL;

    document.getElementById('kQB1').innerHTML = ketQuaC + '<br>' + ketQuaL;
};

// Bài 2:
document.getElementById('btnB2').onclick = function () {
    // Input: n: number
    var n = 0;

    // Output: string
    var ketQua = '';

    // Process:
    var count = 0;
    while (count <= 1000) {
        if (count % 3 == 0) {
            n++;
        }
        count++;
    };

    ketQua = 'Số chia hết cho 3 nhỏ hơn 1000 có: ' + n + ' số';

    document.getElementById('kQB2').innerHTML = ketQua;
};

// Bài 3: 
document.getElementById('btnB3').onclick = function () {
    // Input: Sum: number
    var Sum = 0;

    // Output: string
    var ketQua = '';

    // Process:
    for (var count = 0; Sum < 10000; count++) {
        Sum += count;
        if (Sum > 10000) {
            ketQua = 'Số nguyên dương nhỏ nhất: ' + count;
            break;
        }
    };

    document.getElementById('kQB3').innerHTML = ketQua;
};

// Bài 4:
document.getElementById('btnB4').onclick = function () {
    // Input: x, n, s: number
    var x = Number(document.getElementById('soX').value);
    var n = Number(document.getElementById('soN').value);
    var s = 0;
    // Output: string
    var ketQua = '';

    // Process:
    for (var count = 1; count <= n; count++) {
        s += x ** count;
    };

    ketQua = 'Tổng: ' + s;
    document.getElementById('kQB4').innerHTML = ketQua;
};
