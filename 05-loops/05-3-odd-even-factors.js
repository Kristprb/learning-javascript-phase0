// Tulis perulangan di sini

// ganjil genap
let i = 1;

for (i = 1 ; i <= 100 ; i += 3) {
    if (i % 2 === 0) {
        console.log (i + " - Genap");
    } else {
        console.log (i + " - Ganjil");
    }
}

// faktor 3

let j = 50;

for (j = 50; j <= 200; j +=5) {
    if (j % 3 === 0) {
        console.log (j + " - faktor 3");
    } else {
        console.log (j + " - tidak bisa dibagi 3")
    }
}

// Kelipatan 8

let k = 100;

for (k = 100; k <= 200; k +=7) {
    if (k % 8 === 0) {
        console.log (k);
    }
}