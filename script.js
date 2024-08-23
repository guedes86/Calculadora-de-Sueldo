function calcularsueldo(){
    let horas = document.getElementById('horas').value;

    let valorunitario = document.getElementById('valorunitario').value;

    document.getElementById('sueldo').textContent = "Tu sueldo total es igual a: "+horas*valorunitario+" Pesos Colombiano";
}


