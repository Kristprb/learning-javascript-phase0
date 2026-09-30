// 1) let umur = 20; ubah jadi 21; cetak
// 2) const namaKota = "Jakarta"; cetak
// 3) coba reassign namaKota, amati error-nya, lalu jadikan komentar
// 4) tulis refleksimu sebagai komentar

// Tulis logika Anda di sini

/*
masukkan nilai umur = 20
tetapkan nilai namaKota = "Jakarta"

reassign umur = 21;
reassign namaKota = "Medan"

*/

let umur = 20;
const namaKota = "Jakarta";

umur = 21;
//namaKota = "Medan";
/*
kenapa line ini membuat error, karena variabel yang menggunakan 
const untuk menetapkan valuenya akan membuat valuenya bernilai tetap 
tidak dapat diubah, jadi ketika di reassign maka akan muncul error
*/

console.log (umur , namaKota);
