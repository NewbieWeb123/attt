function nghich_dao_modun() {
    var num = Number(document.getElementById('num').value);
    var mod = Number(document.getElementById('mod').value);
    var result = document.getElementById('output7');
    result.innerHTML = '';
    result.innerHTML += 'Áp dụng thuật toán e';
    result.innerHTML += 'Cách 1: Tính toán dựa trên phép chia phần nguyên<br/>';
    result.innerHTML += 'Ta có: ax + by = GCD(a, b) <=> ' + num + 'x + ' + mod + 'y = GCD(' + num + ', ' + mod + ') <br />';
    result.innerHTML += 'Đặt x0 = 0, y0 = 1, x1 = 1, y1 = 0, a0 = ' + num + ', a1 = ' + mod + ' ta có bảng tính binh họa các bước nhuw sau: <br />';

    var x0 = 0, x1 = 1, y0 = 1, y1 = 0, a0 = mod, a1 = num;
    var table = '<table><tr><th>x0</th><th>x1</th><th>y0</th><th>y1</th><th>q<br/>(phần nguyên của a0 / a1)</th><th>a0</th><th>a1</th></tr>';
    table += '<tr> <td>0</td> <td>1</td> <td>1</td> <td>0</td> <td>-</td><td>' + a0 + '</td><td>' + a1 + '</td></tr>'
    while (a1 != 0) {
        var q = Math.floor(a0 / a1);
        [x0, x1] = [x1, x0 - q * x1];
        [y0, y1] = [y1, y0 - q * y1];
        [a0, a1] = [a1, a0 - q * a1];
        table += '<tr><td>' + x0 + '</td><td>' + x1 + '</td><td>' + y0 + '</td><td>' + y1 + '</td><td>' + q + '</td><td>' + a0 + '</td><td>' + a1 + '</td></tr>';
    }
    table += '</table>';
    result.innerHTML += table;

    if (a0 > 1) {
        result.innerHTML += 'Tại a1 = 0 có a0>1 nên: ';
        result.innerHTML += num + ' không có nghịch đảo theo modun ' + mod;
    } else {
        if (x0 < 0) {
            result.innerHTML += 'Tại a1 = 0 có a0 <= 1, ';
            x_end = x0;
            result.innerHTML += 'Vì x0 âm nên:<br />';
            x0 += mod;
            result.innerHTML += 'Nghịch đảo của ' + num + ' theo modun ' + mod + ' là ' + x_end + ' + ' + mod + ' = ' + x0;
        } else if (x0 >= 0) {
            result.innerHTML += 'Tại a1 = 0 có a0 <= 1, '
            result.innerHTML += 'Vì x0 không âm nên:<br />';
            result.innerHTML += 'Nghịch đảo của ' + num + ' theo modun ' + mod + ' là x0 = ' + x0;

        }
    }

    result.innerHTML += '</br><br/>Cách 2: Tính toán dựa trên phép chia phần dư<br/>';
    result.innerHTML += 'Ta có: n1*a + n2*b = GCD(n1, n2) <=> ' + num + 'a + ' + mod + 'b = GCD(' + num + ', ' + mod + ') <br />';
    result.innerHTML += 'Đặt n1 = ' + num + ', n2 = ' + mod + ' ta có bảng tính binh họa các bước như sau: <br />';

    var n1 = num, n2 = mod, a1 = 1, a2 = 0, b1 = 0, b2 = 1;
    var table = '<table><tr><th>n1</th><th>n2</th><th>r</th><th>q</th><th>a1</th><th>b1</th><th>a2</th><th>b2</th></tr>';

    while (n2 != 0) {
        var q = Math.floor(n1 / n2);
        var r = n1 % n2;
        [n1, n2] = [n2, r];
        [a1, a2] = [a2, a1 - q * a2];
        [b1, b2] = [b2, b1 - q * b2];
        table += '<tr><td>' + n1 + '</td><td>' + n2 + '</td><td>' + r + '</td><td>' + q + '</td><td>' + a1 + '</td><td>' + b1 + '</td><td>' + a2 + '</td><td>' + b2 + '</td></tr>';
    }

    table += '</table>';
    result.innerHTML += table;

    // Tính toán và in ra nghịch đảo cuối cùng
    /*var inverse = a1 < 0 ? a1 + mod : a1;
    result.innerHTML += 'Nghịch đảo của ' + num + ' theo ' + mod + ' là: ' + inverse;*/

    if (n1 > 1) {
        result.innerHTML += 'Tại n2 = 0 có n1>1 nên: ';
        result.innerHTML += num + ' không có nghịch đảo theo modun ' + mod;
    } else {
        if (a1 < 0) {
            result.innerHTML += 'Tại n2 = 0 có n1 <= 1, ';
            x_end = a1;
            result.innerHTML += 'Vì a1 âm nên:<br />';
            a1 += mod;
            result.innerHTML += 'Nghịch đảo của ' + num + ' theo modun ' + mod + ' là ' + x_end + ' + ' + mod + ' = ' + a1;
        } else if (a1 >= 0) {
            result.innerHTML += 'Tại n2 = 0 có n1 <= 1, '
            result.innerHTML += 'Vì a1 không âm nên:<br />';
            result.innerHTML += 'Nghịch đảo của ' + num + ' theo modun ' + mod + ' là a1 = ' + a1;
        }
    }





}

document.querySelector('.tinh_nghich_dao_modun').addEventListener('click', nghich_dao_modun);