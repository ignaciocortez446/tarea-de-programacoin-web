window.onload = function() {
    let formFinanciero = document.getElementById("formFinanzas");
    
    formFinanciero.onsubmit = function(controladorEvento) {
        
        controladorEvento.preventDefault();
        
        
        let nodoMeses = document.getElementById("inputMeses");
        let valorMeses = parseInt(nodoMeses.value);
        
        
        if (isNaN(valorMeses) || valorMeses < 1) {
            alert("Operación inválida. Digite un número de meses válido.");
            return;
        }
        
        ejecutarCoreFinanciero(valorMeses);
    };
};
function ejecutarCoreFinanciero(mesesTotales) {
   
    let panelResultados = document.getElementById("panelResultados");
    let tarjetaResumen = document.getElementById("tarjetaResumen");
    let tablaCuerpoFilas = document.getElementById("tablaCuerpoFilas");
    
   
    tablaCuerpoFilas.innerHTML = "";
    
    
    let penultimo = 0;
    let ultimo = 1;
    let cuotaMesActual = 0;
    let dineroAcumuladoTotal = 0;
    
    
    let bufferFilas = "";
    
    for (let paso = 1; paso <= mesesTotales; paso++) {
        
        if (paso === 1) {
            cuotaMesActual = 1;
        } else if (paso === 2) {
            cuotaMesActual = 1; 
            penultimo = 1;
            ultimo = 1;
        } else {
            
            cuotaMesActual = penultimo + ultimo;
            penultimo = ultimo;
            ultimo = cuotaMesActual;
        }
        
        
        dineroAcumuladoTotal += cuotaMesActual;
        
       
        bufferFilas += "<tr>" +
            "<td><strong>Mes " + paso + "</strong></td>" +
            "<td>" + cuotaMesActual.toLocaleString() + " Bs.</td>" +
            "<td>" + dineroAcumuladoTotal.toLocaleString() + " Bs.</td>" +
        "</tr>";
    }
    
   
    tablaCuerpoFilas.innerHTML = bufferFilas;
    
    tarjetaResumen.innerHTML = "<p>Plan finalizado con éxito para un ciclo de <span style='color:#00b0ff;'>" + mesesTotales + " meses</span>.</p>" + 
                               "<p style='font-size:1.2rem; margin-top:10px;'>Monto Final Logrado: <span style='color:#00e676;'>" + dineroAcumuladoTotal.toLocaleString() + " Bs.</span></p>";
    
    
    panelResultados.classList.remove("vision-oculta");
}