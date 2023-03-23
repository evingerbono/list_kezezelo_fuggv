//import { SZAMLISTA , SZOVEGLISTA } from "./adat.js";
const SZAMLISTA = [13, 14, 55, 11, 122];
const SZOVEGLISTA = ["Béka", "Alma", "Répa", "Narancs"];
const OBJEKTUMLISTA = [
    { nev: "Dézi", fajta: "keverék", kor: "12" },
    { nev: "Bodri", fajta: "mudi", kor: "4" },
    { nev: "Loki", fajta: "tacskó", kor: "3" },
    { nev: "Zuri", fajta: "foxterrier", kor: "8" },
    { nev: "Happy", fajta: "Német Juhász", kor: "7" }
]

$(function () {

    //let kevertIndexLista=keveres1(SZAMLISTA);
    //console.log(kevertIndex);
    /*for (let index = 0; index < SZAMLISTA.length; index++) {
        console.log(SZAMLISTA[index],kevertIndexLista[index],SZAMLISTA[kevertIndexLista[index]]);
        
    } */
    const Korok = $("#korok");

    console.log(SZOVEGLISTA);
    rendezes1(SZOVEGLISTA);
    console.log(SZOVEGLISTA);

    console.log(SZAMLISTA);
    rendezes1(SZAMLISTA);
    console.log(SZAMLISTA);

    rendezes2(SZAMLISTA);
    console.log(SZAMLISTA);

    keveres2(SZAMLISTA);
    console.log(SZAMLISTA);

    kutyakKor(OBJEKTUMLISTA);
})

function keveres1(lista) {
    let megKevertIndex = [];
    let szamok;
    while (megKevertIndex.length < lista.length) {
        szamok = Math.floor(Math.random() * lista.length)
        let index = 0;
        while (index < megKevertIndex.length && !(szamok == megKevertIndex[index])) {
            index++;
        }
        if (index < megKevertIndex.length) {
            megKevertIndex.push(szamok);
        }
    }
    console.log(megKevertIndex);
    return megKevertIndex;
}
function rendezes1(lista) {
    lista.sort();
}
function rendezes2(lista) {
    lista.sort(function (a, b) { return a - b });
}

function keveres2(lista) {
    //lista.sort(function (a, b) { return 0.5 - Math.random() });
    lista.sort((a, b) => { return 0.5 - Math.random() });
}
function kutyakKor(lista) {
    let kor = "";
    for (let index = 0; index < lista.length; index++) {
        kor += `<li>${lista[index].kor}</li>`;
    }
    Korok.append(kor);
}