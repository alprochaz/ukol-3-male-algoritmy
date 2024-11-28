// 3. domaci ukol - male algoritmy

const numbers = [
  -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
];

// 1. Vypište do stránky všechna čísla.
document.body.innerHTML += `<p> Cisla: ${numbers} </p> `

// 2. Vypište do stránky druhé mocniny všech čísel.
const druheMocniny = numbers.map(item => item * item)
document.body.innerHTML += `<p> Druhe mocniny cisel: ${druheMocniny} </p> `

// 3. Vypište do stránky pouze záporná čísla.
const negativeNumbers = numbers.filter((item) => item < 0);
document.body.innerHTML += `<p> Pouze zaporna cisla (filter): ${negativeNumbers} </p> `

// --- to same s cyklem forEach (funguje, ale filter je asi nejlepsi)
document.body.innerHTML += 'Pouze zaporna cisla (forEach): '
numbers.forEach(item => {
    if (item < 0) {
        document.body.innerHTML += item + ', '
    } 
})

// --- to same, ale nefunguje uplne spravne: pouzito .map (vypisuje ,,,, kdyz tam je kladne cislo)
const zapornaCisla = numbers.map(item => {
    if (item < 0) {
        return item
    } 
})
document.body.innerHTML += `<p> Pouze zaporna cisla (map - zde neni vhodne, vznikaji mezery): ${zapornaCisla} </p> ` 

// 4. Vypište do stránky absolutní hodnotu všech čísel.
const absolutNumbers = numbers.map(item => Math.abs(item))
document.body.innerHTML += `<p> Absolutni cisla: ${absolutNumbers} </p> ` 

// 5. Vypište do stránky pouze sudá čísla.
const sudaCisla = numbers.filter((item) => item % 2 === 0);
document.body.innerHTML += `<p> Pouze suda cisla (filter): ${sudaCisla} </p> `

// --- to same s cyklem forEach
document.body.innerHTML += 'Pouze suda cisla: '
numbers.forEach(item => {
    if (item % 2 === 0) {
        document.body.innerHTML += item + ', '
    } 
})

// 6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
const cislaDelitelna3 = absolutNumbers.filter((item) => item % 3 === 0);
document.body.innerHTML += `<p> Pouze absolutni cisla delitelna 3 (filter): ${cislaDelitelna3} </p> `

// --- to same s cyklem forEach
document.body.innerHTML += '<p> </p> Pouze absolutni cisla delitelna 3: '
absolutNumbers.forEach(item => {
    if (item % 3 === 0) {
        document.body.innerHTML += item + ', '
    } 
})

// 7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
const distanceFrom5 = numbers.map(item => {
    if (item <= 5) {
        return 5 - item
    } else {
        return item - 5 
    }
})
document.body.innerHTML += `<p> Jak daleko je cislo v seznamu od cisla 5: ${distanceFrom5} </p> ` 


// 8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
const druheMocninyDistanceFrom5 = distanceFrom5.map(item => item * item)
document.body.innerHTML += `<p> Druhe mocniny predchozich cisel: ${druheMocninyDistanceFrom5} </p> `

// 9. Spočítejte, kolik je v seznamu záporných čísel.
let pocetZapornych = 0
numbers.forEach(item => {
    if (item < 0) {
        pocetZapornych = pocetZapornych + 1
    } 
})
document.body.innerHTML += `Pocet zapornych cisel: ${pocetZapornych} </p>`

// 10. Spočítejte součet všech čísel v poli.
let soucet = 0
numbers.forEach(item => {
    soucet = soucet + item
})
document.body.innerHTML += `<p> Soucet vsech cisel:  ${soucet} </p>`

// 11. Spočítejte průměr všech čísel v poli.
document.body.innerHTML += `<p> Prumer vsech cisel:  ${soucet / numbers.length} </p>`

// 12. Spočítejte součet všech kladných čísel v poli.
let soucetKladnych = 0
numbers.forEach(item => {
    if (item > 0) {
        soucetKladnych = soucetKladnych + item
    }
})
document.body.innerHTML += `<p> Soucet kladnych cisel:  ${soucetKladnych} </p>`