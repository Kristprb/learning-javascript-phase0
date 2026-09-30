let berat = 70;   // kilogram
let tinggi = 1.75; // meter
let bmi = berat / (tinggi * tinggi);
let hasil = "";

// Hitung BMI = berat / (tinggi * tinggi), lalu cetak kategorinya

if (bmi < 18.5) {
    hasil = "Kurus";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    hasil = "Normal";
} else if (bmi >= 25 && bmi <= 29.9) {
    hasil = "Gemuk";
} else if (bmi >= 30) {
    hasil = "Obesitas";
}

console.log (hasil);