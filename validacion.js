/* Maximo numero de caracteres de nombre, asunto y mensaje */
document.getElementById("form1").addEventListener("input", function(event) {
    var maxLength;
    if (event.target.id === "name1" || event.target.id === "asunto1") {
        maxLength = 50;
    } else if (event.target.id === "mensaje1") {
        maxLength = 300;
    }
    
    if (maxLength) {
        if (event.target.value.length > maxLength) {
            alert("El máximo número de caracteres para este campo es " + maxLength);
            event.target.value = event.target.value.substring(0, maxLength);
        }
    }
});