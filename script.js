document.write('<h1>Estadisticas centro medico ñuñoa</h1>');

var radiologia = [
    { hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA' },
    { hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE' },
    { hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE' },
    { hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA' },
    { hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA' },
];

var traumatologia = [
    { hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA' },
    { hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE' },
    { hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA' },
    { hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE' },
    { hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE' },
];

var dental = [
    { hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE' },
    { hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE' },
    { hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA' },
    { hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA' },
    { hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA' },
    { hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE' },
];

//Agregar código para el desafio 2 aquí
//1-Modificar Horas de Traumatologia
traumatologia[0].hora = '9:00';
traumatologia[1].hora = '9:30';
traumatologia[2].hora = '10:00';
traumatologia[3].hora = '10:30';
traumatologia[4].hora = '12:00';
traumatologia[5].hora = '12:30';
traumatologia[6].hora = '13:00';

//2-Eliminar el primer y ultimo elemento de Radiologia
radiologia.shift();
radiologia.pop();

//3-Mostrar consultas medicas separado con un guion y cada fila separado con un parrafo
document.write("<h3>Lista consulta medica dental</h3>")
for (let i = 0; i < dental.length; i++) {
    let values = Object.values(dental[i]);
    document.write(values.join(" - "));
    document.write("<p></p>");
}

//4-Listado de todos los pacientes del centro medico.
document.write("<h3>Lista total de pacientes </h3>")
var listado = [...radiologia, ...traumatologia, ...dental];
for (let i = 0; i < listado.length; i++) {
    document.write(`${i+1}.- ${listado[i].paciente} <br>`);
}


//5-Filtrar pacientes que indican ser de ISAPRE en dental
var isapre = dental.filter(function (paciente) {
    return paciente.prevision == "ISAPRE";
});
document.write("<br> <h3>Lista de pacientes ISAPRE en Dental </h3>")
for (let i = 0; i < isapre.length; i++) {
    document.write(`${i+1}.- ${isapre[i].paciente} - ${isapre[i].prevision} <br>`);
}


//6-Filtrar pacientes que indican ser de FONASA en traumatologia
var fonasa = traumatologia.filter(function (paciente) {
    return paciente.prevision == "FONASA";
});
document.write("<br> <h3>Lista de pacientes FONASA en Traumatologia </h3>")
for (let i = 0; i < fonasa.length; i++) {
    document.write(`${i+1}.- ${fonasa[i].paciente} - ${fonasa[i].prevision} <br>`);
}

//Agregar código para el desafio 2 aquí

document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}.</p>`);
