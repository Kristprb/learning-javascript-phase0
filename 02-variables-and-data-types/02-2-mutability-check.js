const dua = "defaultvaluedua";
dua[2] = "x";
console.log(dua);
// defaultvaluedua, karena udh diset menggunakan const maka nilainya tidak akan berubah
// dan bentuknya juga adalah string, bukan array jadi tidak bisa mengubah by indexnya

const empat = [1, 9, 6];
empat[2]= "valuedilistpertama";
console.log(empat);
//berubah jadi [ 1, 'valuedilistpertama', 6 ]
//karena bentuk arraynya tetap, yang diubah cuma isi arraynya, kecuali 
//jika arraynya yg diubah maka akan tetap jadi error;
