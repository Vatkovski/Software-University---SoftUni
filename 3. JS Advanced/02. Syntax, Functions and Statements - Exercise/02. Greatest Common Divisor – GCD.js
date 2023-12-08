function gcd(a, b) {
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}

console.log(gcd(15, 5)); 
console.log(gcd(2154, 458)); 
