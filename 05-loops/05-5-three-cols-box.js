let row = 5;
let angka = 1;


// Tulis logika perulangan grid Anda di sini
for (let i = 1 ; i <= row; i++) {
        //console.log (i);
        let hasil = "";
    for (let j = 1; j <= 3; j++){
        //console.log (j);
        hasil += angka + " ";
        angka ++;
    } 
    
    
    console.log("// " + hasil);
}