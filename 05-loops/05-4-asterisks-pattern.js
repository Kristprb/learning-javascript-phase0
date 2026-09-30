let rows = 5;
let hasil = "";


//Tulis nested loop Anda di sini
for (i = 1; i <= rows ; i++) {
    //console.log ("ini I " + i);
    for (j = 1; j <= rows; j++) {
        hasil += "*";
        console.log (hasil);
        //console.log ("Ini J " + j);
    }
}
console.log (hasil);

for (i = rows; i >= 1; i--) {
    //console.log (i);
    let hasil = "";
    for (j = i; j >= 1; j--) {
        hasil += "*";
    } 
    console.log (hasil);
} 


 /*
 1. di iterasi pertama, dimulai dengan i yang nilainya 1. karena nilainya 1,  
 2. deklarasi variabel hasil dengan nilai string kosong
 3. melakukan looping kedua di dalam iterasi pertama
    a. j nilainya 1 
    b. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = *
    c. J nilainya 2
    d. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = * + * = **
    d. J nilainya 3
    e. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = ** + * = ***
    f. J nilainya 4
    g. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = *** + * = ****
    h. J nilainya 5
    i. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = **** + * = *****
    j. Looping berhenti karena nilai 6 sudah lebih besar dari 5
4. menampilkan pada terminal 5 bintang 
5. iterasi kedua, nilainya 2
6. hasilnya dikosongkan 
7. melakukan looping kedua di dalam iterasi kedua 
    a. j nilainya 1 
    b. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = *
    c. J nilainya 2
    d. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = * + * = **
    d. J nilainya 3
    e. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = ** + * = ***
    f. J nilainya 4
    g. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = *** + * = ****
    h. J nilainya 5
    i. masukkan "*" ke dalam hasil sebanyak 1. nilai hasil = **** + * = *****
    j. Looping berhenti karena nilai 6 sudah lebih besar dari 5
8. menampilkan pada terminal 
 */
