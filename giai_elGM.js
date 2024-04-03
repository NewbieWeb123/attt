$(document).ready(function() {

    $('.tinh_elgamal').click(function() {

        
        calculate()

    })

    function mod(n, m) {
        return ((n % m) + m) % m;
    }
    
    function modInverse(a, m) {
        a = a % m;
        for (var x = 1; x < m; x++) {
            if ((a * x) % m == 1) {
                return x;
            }
        }
        return 1;
    }
    
    function calculate() {
        var p = document.getElementById('p').value;
        var g = document.getElementById('g').value;
        var u = document.getElementById('u').value;
        var k = document.getElementById('k').value;
        var X = document.getElementById('X').value;
    
        var y = mod(Math.pow(g, u), p);
        var a = mod(Math.pow(g, k), p);
        var b = mod((Math.pow(y, k) * X), p);
    
        var output = document.getElementById('output');
        output.innerHTML = '<h2>Kết quả</h2>';
        output.innerHTML += '<p>Khóa công khai (p, g, y): (' + p + ', ' + g + ', ' + y + ')</p>';
        output.innerHTML += '<p>Khóa bí mật u =  ' + u + '</p>';
        output.innerHTML += '<p>Thông điệp đã mã hóa: (' + a + ', ' + b + ')</p>';
        var decodedMessage = mod(b * modInverse(Math.pow(a, u), p), p);
        output.innerHTML += '<p>Thông điệp đã giải mã: ' + decodedMessage + '</p>';
    
        output.innerHTML += '<h2>Các bước</h2>';
        output.innerHTML += '<p>Ta có:</p>';
        output.innerHTML += '<p>1. Tìm khóa bí mật và khóa công khai</p>';
        output.innerHTML += '<p> => Khóa bí mật u = ' + u + '</p>';
        output.innerHTML += '<p> Tính \\(y = g^u \\mod p = ' + g + '^' + u + ' \\mod ' + p + ' = ' + y + '\\)</p>';
        output.innerHTML += '<p> => khóa công khai (p, g, y) = (' + p + ', ' + g + ', ' + y + ')</p>';
        output.innerHTML += '<p>2. Mã hóa bản rõ X = '+ X +'</p>';
        output.innerHTML += '<p> Tính \\(a = g^k \\mod p = ' + g + '^' + k + ' \\mod ' + p + ' = ' + a + '\\)</p>';
        output.innerHTML += '<p> Tính \\(b = y^k \\times X \\mod p = ' + y + '^' + k + ' \\times ' + X + ' \\mod ' + p + ' = ' + b + '\\)</p>';
        output.innerHTML += '<p> => Bản mã (a, b) = ('+a+', '+b+')</p>';
        output.innerHTML += '<p> Giải mã bản mã (thông điệp) \\(X = b \\times (a^u)^{-1} \\mod p = ' + b + ' \\times (' + a + '^' + u + ')^{-1} \\mod ' + p + ' = ' + decodedMessage + '\\)</p>';
    
        // Tính nghịch đảo modulo
        var invMod = modInverse(Math.pow(a, u), p);

        // Hiển thị bảng tính nghịch đảo
        output.innerHTML += '<h2>Bảng tính nghịch đảo</h2>';
        output.innerHTML += '<p>$$a^u = ' + Math.pow(a, u) + '$$</p>';
        output.innerHTML += '<p>$$(a^u)^{-1} \\mod p = ' + invMod + '$$</p>';

        MathJax.typesetPromise();
    }
    
})