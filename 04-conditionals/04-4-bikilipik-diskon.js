var name = "Joko";
var role = "member lama";
var birthMonth = "Januari";
let hasil = "";

// Tulis logika diskon Anda di sini

if (typeof name === "undefined") {
    hasil = ("Nama tidak boleh kosong!");
} else if (role === "member baru") {
    if (birthMonth === "Januari") {
        hasil = ("Selamat " + name + "!. Anda berhak mendapatkan voucher diskon sebesar 50%!");    
    } else {
        hasil = ("Maaf " + name + ", voucher diskon hanya untuk yang lahir di bulan Januari.");
    }
} else if (role === "member lama") {
    if (birthMonth === "Januari") {
        hasil = ("Selamat " + name + "!. Anda berhak mendapatkan voucher diskon sebesar 30%!");
    } else {
        hasil = ("Maaf " + name + ", voucher diskon hanya untuk yang lahir di bulan Januari.");
    }
} else {
    hasil = ("Selamat datang di Bikilipik, " + name + ". Mohon maaf untuk mendapatkan voucher diskon, anda wajib mendaftar dahulu.")
}

console.log (hasil);