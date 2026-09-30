let player1 = "kertas";
let player2 = "batu";
let hasil = "";

// Cetak "Player 1 menang", "Player 2 menang", atau "Seri"

if (player1 === player2) {
    hasil = ("seri");
} else if (player1 === "batu" && player2 === "gunting") {
    hasil = ("Player 1 menang");    
} else if (player1 === "kertas" && player2 === "gunting") {
    hasil = ("Player 2 menang");
} else if (player1 === "gunting" && player2 === "kertas") {
    hasil = ("Player 1 menang");    
} else if (player1 === "batu" && player2 === "kertas") {
    hasil = ("Player 2 menang");    
} else if (player1 === "kertas" && player2 === "batu") {
    hasil = ("Player 1 menang");    
} else if (player1 === "gunting" && player2 === "batu") {
    hasil = ("Player 2 menang");   
}

console.log (hasil);