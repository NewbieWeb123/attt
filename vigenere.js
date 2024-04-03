$(document).ready(function () {

    $('.top-up').click(function () {
        $('html').scrollTop(0);
    })

    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function gcdExtended(a, b) {
        if (a == 0)
            return [b, 0, 1];

        let [gcd, x1, y1] = gcdExtended(b % a, a);

        let x = y1 - (Math.floor(b / a) * x1);
        let y = x1;

        return [gcd, x, y];
    }

    function decryptVigenere() {
        let ciphertext = document.getElementById('cipher_giai_ma').value.toUpperCase();
        let key = document.getElementById('key_giai_ma').value.toUpperCase();

        let decrypted = "";
        let steps = [];

        for (let i = 0; i < ciphertext.length; i++) {
            let c = ciphertext[i];
            let k = key[i % key.length];
            let cIndex = alphabet.indexOf(c);
            let kIndex = alphabet.indexOf(k);
            let decryptedIndex = (cIndex - kIndex + 26) % 26;
            decrypted += alphabet[decryptedIndex];
            steps.push([i + 1, c, k, cIndex + 1, kIndex + 1, decryptedIndex + 1, alphabet[decryptedIndex]]);
        }

        let output = "<table border='1'><tr><th>Bước</th><th>Ký tự cần giải mã</th><th>Khóa</th><th>Vị trí ký tự trong bảng chữ cái</th><th>Vị trí khóa trong bảng chữ cái</th><th>Vị trí sau khi giải mã</th><th>Ký tự sau khi giải mã</th></tr>";
        for (let step of steps) {
            output += `<tr><td>${step[0]}</td><td>${step[1]}</td><td>${step[2]}</td><td>${step[3]}</td><td>${step[4]}</td><td>${step[5]}</td><td>${step[6]}</td></tr>`;
        }
        output += "</table>";

        document.getElementById('output3').innerHTML = "Bản giải mã Vigenere: " + decrypted + "<br><br>Chi tiết các bước giải:<br>" + output;
    }

    function encryptVigenere() {
        let plaintext = document.getElementById('cipher_ma_hoa').value.toUpperCase();
        let key = document.getElementById('key_ma_hoa').value.toUpperCase();

        let encrypted = "";
        let steps = [];

        for (let i = 0; i < plaintext.length; i++) {
            let p = plaintext[i];
            let k = key[i % key.length];
            let pIndex = alphabet.indexOf(p);
            let kIndex = alphabet.indexOf(k);
            let encryptedIndex = (pIndex + kIndex) % 26;
            encrypted += alphabet[encryptedIndex];
            steps.push([i + 1, p, k, pIndex + 1, kIndex + 1, encryptedIndex + 1, alphabet[encryptedIndex]]);
        }

        let output = "<table border='1'><tr><th>Bước</th><th>Ký tự cần mã hóa</th><th>Khóa</th><th>Vị trí ký tự trong bảng chữ cái</th><th>Vị trí khóa trong bảng chữ cái</th><th>Vị trí sau khi mã hóa</th><th>Ký tự sau khi mã hóa</th></tr>";
        for (let step of steps) {
            output += `<tr><td>${step[0]}</td><td>${step[1]}</td><td>${step[2]}</td><td>${step[3]}</td><td>${step[4]}</td><td>${step[5]}</td><td>${step[6]}</td></tr>`;
        }
        output += "</table>";

        document.getElementById('output4').innerHTML = "Bản mã hóa Vigenere: " + encrypted + "<br><br>Chi tiết các bước mã hóa:<br>" + output;
    }

    function decryptCesar() {
        let name = document.getElementById('name_giai_ma').value.toUpperCase();
        let shift = document.getElementById('shift_giai_ma').value;

        let decrypted = "";
        let steps = [];

        for (let i = 0; i < name.length; i++) {
            if (name[i] === ' ') {
                decrypted += ' ';
                steps.push([i + 1, name[i], '-', '-', '-', '-', ' ']);
                continue;
            }

            let nameIndex = alphabet.indexOf(name[i]);
            let decryptedIndex = (nameIndex - parseInt(shift) + 26) % 26;
            decrypted += alphabet[decryptedIndex];
            steps.push([i + 1, name[i], '-', nameIndex + 1, '-', decryptedIndex + 1, alphabet[decryptedIndex]]);
        }

        let output = "<table border='1'><tr><th>Bước</th><th>Ký tự cần giải mã</th><th>Khóa</th><th>Vị trí ký tự trong bảng chữ cái</th><th>Vị trí khóa trong bảng chữ cái</th><th>Vị trí sau khi giải mã</th><th>Ký tự sau khi giải mã</th></tr>";
        for (let step of steps) {
            output += `<tr><td>${step[0]}</td><td>${step[1]}</td><td>${step[2]}</td><td>${step[3]}</td><td>${step[4]}</td><td>${step[5]}</td><td>${step[6]}</td></tr>`;
        }
        output += "</table>";

        document.getElementById('output5').innerHTML = "Bản giải mã Cesar: " + decrypted + "<br><br>Chi tiết các bước giải:<br>" + output;
    }

    function encryptCesar() {
        let name = document.getElementById('name_ma_hoa').value.toUpperCase();
        let shift = document.getElementById('shift_ma_hoa').value;

        let encrypted = "";
        let steps = [];

        for (let i = 0; i < name.length; i++) {
            if (name[i] === ' ') {
                encrypted += ' ';
                steps.push([i + 1, name[i], '-', '-', '-', '-', ' ']);
                continue;
            }

            let nameIndex = alphabet.indexOf(name[i]);
            let encryptedIndex = (nameIndex + parseInt(shift)) % 26;
            encrypted += alphabet[encryptedIndex];
            steps.push([i + 1, name[i], '-', nameIndex + 1, '-', encryptedIndex + 1, alphabet[encryptedIndex]]);
        }

        let output = "<table border='1'><tr><th>Bước</th><th>Ký tự cần mã hóa</th><th>Khóa</th><th>Vị trí ký tự trong bảng chữ cái</th><th>Vị trí khóa trong bảng chữ cái</th><th>Vị trí sau khi mã hóa</th><th>Ký tự sau khi mã hóa</th></tr>";
        for (let step of steps) {
            output += `<tr><td>${step[0]}</td><td>${step[1]}</td><td>${step[2]}</td><td>${step[3]}</td><td>${step[4]}</td><td>${step[5]}</td><td>${step[6]}</td></tr>`;
        }
        output += "</table>";

        document.getElementById('output6').innerHTML = "Bản mã hóa Cesar: " + encrypted + "<br><br>Chi tiết các bước mã hóa:<br>" + output;
    }

    document.querySelector('.giai_ma_vigenere').addEventListener('click', decryptVigenere);
    document.querySelector('.ma_hoa_vigenere').addEventListener('click', encryptVigenere);
    document.querySelector('.giai_ma_cesar').addEventListener('click', decryptCesar);
    document.querySelector('.ma_hoa_cesar').addEventListener('click', encryptCesar);



})