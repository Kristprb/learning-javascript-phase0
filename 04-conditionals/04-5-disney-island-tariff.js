let age = 3;
let height = 95;
let hasil = "";
// Tulis logika tarif tiket Disney Island di sini


    if (age > 10) {
        hasil = 80000;
    } else if (age >= 8 && age <= 10) {
        hasil = 50000;

        if (height > 150) {
            hasil = (hasil + 20000 + " (50000 + 20000, tinggi > 150)");
        }
    } else if (age >= 4 && age <= 7) {
        hasil = 40000;

        if (height > 120) {
            hasil = (hasil + 15000 + " (40000 + 15000, tinggi > 120)");
        }
    } else if (age >= 2 && age <= 3) {
        hasil = 30000;
        
        if (height > 70) {
            hasil = (hasil + 10000 + " (30000 + 10000, tinggi > 70)");
        }
    } else {
        hasil = "Dilarang masuk";
    }

    console.log (hasil);