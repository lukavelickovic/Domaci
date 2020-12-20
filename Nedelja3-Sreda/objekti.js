let sastojak1 = {
    ime: 'Шпагете',
    kolicina: 1,
    cena: 100
}
let sastojak2 = {
    ime: 'Павлака за кување',
    kolicina: 2,
    cena: 135
}
let sastojak3 = {
    ime: 'Ћуреће месо',
    kolicina: 0.3,
    cena: 800
}
function cenaSastojka(s){
    return s.kolicina * s.cena
}
let receptv2 = {
    ime: 'Шпагете у белом сосу',
    tezina: 'Средњи',
    sastojci: [sastojak1,sastojak2,sastojak3]
}
// Написати функцију која рачуна укупну цену рецепта
const cenazasve = (recept) => {
    let suma = 0
    for(let i = 0; i < recept.sastojci.length;i++){
        suma += cenaSastojka(recept.sastojci[i])
        return suma
    }
}