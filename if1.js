function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado!! ' + nota);
    }
}

soBoaNoticia(7.1);

function seForVerdade(valor) {
    if(valor) {
        console.log('É verdade... ' + valor);
    } else {
        console.log('É falso... ' + valor);
    }
}

seForVerdade();
seForVerdade(null);
seForVerdade(NaN);
seForVerdade('');
seForVerdade(0);
seForVerdade(-1);
seForVerdade(' ');
seForVerdade('?');
seForVerdade([]);
seForVerdade([1,2]);
seForVerdade({});