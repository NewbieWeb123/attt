$(document).ready(function() {

    $('.tinh_rsa').click(function() {
        tinh_rsa();
    })

    function gcdExtended(a, b) {
        if (a == 0)
            return [b, 0, 1];

        let [gcd, x1, y1] = gcdExtended(b % a, a);

        let x = y1 - (Math.floor(b / a) * x1);
        let y = x1;

        return [gcd, x, y];
    }

    function solveRSA(p, q, e) {
        let n = p * q;
        let m = (p - 1) * (q - 1);
        let [gcd, x, y] = gcdExtended(e, m);
        let d = ((x % m) + m) % m;

        return { publicKey: [e, n], privateKey: [d, p, q] };
    }

    function tinh_rsa() {
        let p = document.getElementById('p-rsa').value;
        let q = document.getElementById('q-rsa').value;
        let e = document.getElementById('e-rsa').value;
        let { publicKey, privateKey } = solveRSA(p, q, e);

        let solutionDiv = document.getElementById('output2');
        solutionDiv.innerHTML = '';

        let steps = [
            `1. Chọn hai số nguyên tố lớn p = ${p} và q = ${q}. Tính n = p x q = ${publicKey[1]} và m = Φ(n) = (p - 1) x (q - 1) = ${(p - 1) * (q - 1)}.`,
            `2. Chọn e = ${e}, 1 ≤ e ≤ m - 1, sao cho gcd(e, m) = 1.`,
            `3. Tìm d sao cho e * d = 1 (mod m), tức là tính d = e^-1 (mod m), giải theo thuật toán gcd mở rộng. Kết quả là d = ${privateKey[0]}.`,
            `Khóa công khai (Public key) là (e, n) = (${publicKey[0]}, ${publicKey[1]}).`,
            `Khoá dùng riêng (Private key) là (d, p, q) = (${privateKey[0]}, ${privateKey[1]}, ${privateKey[2]}).`
        ];

        for (let step of steps) {
            let stepDiv = document.createElement('div');
            stepDiv.className = 'step';
            stepDiv.textContent = step;
            solutionDiv.appendChild(stepDiv);
        }
    }

})