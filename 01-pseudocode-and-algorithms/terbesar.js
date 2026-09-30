let a = 7;
let b = 12;
let c = 4;
let terbesar = "";

if (a > b && a > c) {
    terbesar = "a";
} else if (b > a && b > c) {
    terbesar = "b";
} else {
    terbesar = "c";
}

console.log (terbesar);