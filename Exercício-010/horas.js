var hatual = new Date()
var hora = hatual.getHours()
console.log (`Neste momento, são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log ("Tenha um Bom Dia!!")
} 
else if (hora <= 18) {
    console.log ("Tenha uma Boa Tarde!!")
} 
else {
    console.log ("Tenha uma Boa Noite!!")
}