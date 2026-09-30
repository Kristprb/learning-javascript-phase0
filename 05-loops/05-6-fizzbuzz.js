// Loop 1..20:
//   habis dibagi 3 & 5 -> "FizzBuzz"
//   habis dibagi 3      -> "Fizz"
//   habis dibagi 5      -> "Buzz"
//   selain itu          -> angkanya

// Tulis logika Anda di sini
let hasil = "";


for (let i = 1 ; i <= 20; i++){
    //console.log (i);
    if (i %3 === 0 && i %5 === 0) {
        hasil = "FizzBuzz";
    } else if (i %3 === 0) {
        hasil = "Fizz";
    } else if (i %5 === 0) {
        hasil = "Buzz"
    }else {
        hasil = i;
    }
    console.log (hasil);
}
