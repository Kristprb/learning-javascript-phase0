// Tulis logika Anda di sini
/*
 masukkan nilai kata = string
 masukkan nilai kata = number
 masukkan nilai kata = boolean
 masukkan nilai kata = undefined
 set variabel tipe sebagai penampung hasilnya

 if typeof kata = kosong then set tipe "Invalid data"
 else if typeof kata = string then set tipe ("Username " + kata)
 else if typeof kata = number then set tipe ("age " + kata)
 else if typeof kata = true then set tipe ("thank you for agreeing")
 else typeof kata = false then set tipe ("cannot proceed without agreement")
 

 output tampilkan tipe

*/

let kata ;
let type = "";

    if (typeof kata === "undefined") {
        type = ("Invalid data");
    } else if (typeof kata === "string") {
        type = ("Username " + kata);
    } else if (typeof kata === "number") {
        type = ("age " + kata);
    } else if (typeof kata === "boolean") {
        if (kata === true) {
            type = ("thank you for agreeing");
        } else {
            type = ("cannot proceed without agreement");
        }
    }

    console.log (type);

