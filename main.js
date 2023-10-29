document.getElementById("calculateButton").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const distance = parseFloat(document.getElementById("distance").value);
    const age = parseInt(document.getElementById("age").value);
    const costoPerKm = 0.21;
    const carroza = Math.floor(Math.random()* 10) +1;
    const codice = Math.floor(Math.random()* 92911) +1;

    if (name.trim() === "" || isNaN(distance) || isNaN(age)) {
        alert("Inserisci valori validi per nome, chilometri e età.");
        return;
    }

    let costoTotale = distance * costoPerKm;

    if (age <= 17) {
        costoTotale *= 0.8; // Sconto del 20% per i minorenni
    } else if (age >= 65) {
        costoTotale *= 0.6; // Sconto del 40% per gli over 65
    }
    document.getElementById("nome").textContent = "NOME PASSEGGERO: " + name;
    document.getElementById("result").textContent = "Costo biglieto: € " + costoTotale.toFixed(2);
    document.getElementById("carrozza").textContent = "Numero della carrozza: " + carroza;
    document.getElementById("codice").textContent = "Codice CP: " + codice;
});