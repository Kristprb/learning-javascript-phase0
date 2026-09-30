let umur = 1;
let height = 170;
let harga = 0;

    if (umur > 10) {
        harga = 80000;
    } else if (umur >= 8 && umur <= 10) {
        harga = 50000;

        if (height > 150) {
            harga += 20000;
        }
    } else if (umur >= 4 && umur <= 7) {
        harga = 40000;

        if (height > 120) {
            harga = harga + 15000;
        }
    } else if (umur >= 2 && umur <= 3) {
        harga = 30000;
        
        if (height > 70) {
            harga = harga + 10000;
        }
    } else {
        harga = "Dilarang masuk";
    }

    console.log ("Harga : " + harga);