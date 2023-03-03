/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/


//1. uzduotis

function palygintiSk(a, b) {
    if(a > b){
        console.log('didesnis skaicius:', a)
    } else if (a < b){
        console.log('didesnis skaicius:', b)
    } else if (a = b){
        console.log(a,'lygus', b)
    }
}
palygintiSk( 10, 7 )


//2. uzduotis
function isvestiSk() {
    for(let i=1; i < 11; i++) {
        console.log(i)
    }
}
 isvestiSk();


 //3. uzduotis
 function isvestiSk2() {
    for (let i = 0; i < 11; i += 2) {
        console.log(i)
    }
 }
 isvestiSk2();


 //4. uzduotis
 function sugeneruoti() {
 for (let i = 0; i < 5; i++) {
        console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    }
}
sugeneruoti();

//5. uzduotis
function sugeneruoti2() {
let penki = 0;
while (penki !== 5) {
        penki = Math.floor(Math.random() * (10 - 1 + 1) + 1);
        console.log(penki);
    }
}
sugeneruoti2();

//6. uzduotis
let masyvas = [];
const masyvoIlgis = Math.floor(Math.floor(Math.random() * (31 - 20) + 20));

for (let i = 0; i < masyvoIlgis; i++) {
    masyvas.push(Math.floor(Math.random() * (31 - 10) + 10))
}
console.log(masyvas);

let maxNumber = 0;
for (let number of masyvas) {
    if (number > maxNumber) {
        maxNumber = number;
    }
}
console.log(maxNumber);

//7. uzduotis

let raidziuMasyvas = [];
let kiekA = 0;
let kiekB = 0;
let kiekC = 0;
let kiekD = 0;
function randRaide() {
    const raides = 'ABCD';
    return raides[Math.floor(Math.random() * raides.length)];
}
for (let i = 0; i < 100; i++) {
    raidziuMasyvas[i] = randRaide();
    if (raidziuMasyvas[i] === 'A') {
        kiekA++;
    } else if (raidziuMasyvas[i] === 'B') {
        kiekB++;
    } else if (raidziuMasyvas[i] === 'C') {
        kiekC++;
    } else {
        kiekD++;
    }
}
console.log(raidziuMasyvas);
console.log('A raidziu: ' + kiekA);
console.log('B raidziu: ' + kiekB);
console.log('C raidziu: ' + kiekC);
console.log('D raidziu: ' + kiekD);



//8. uzduotis

function lygineSuma(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if ((a + b) % 2 === 1) {
            return 'nelygine suma';
        };
        return a + b;
    } else {
        if ((a.length + b.length) % 2 === 1) {
            return 'nelygine suma'
        }
    return a.length + b.length;
    }
}

console.log(lygineSuma(10, 13));
     

//9. uzduotis

function pirminisSkaicius(a) {
    let yraPirminis = true;
    if (typeof a === 'number' && a >= 1){
        for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                yraPirminis = false;
                break;
            }
        }
        if (yraPirminis) {
            return `${a} - skaicius yra pirminis`;
        } else {
            return `${a} - skaicius nera pirminis`;
        }
    }
}
console.log(pirminisSkaicius(2));

//10. uzduotis

function telefonoNumeris(a) {
    if (a.constructor === Array) {
        return '(' + a[0] + a[1] + a[2] + ') ' + a[3] + a[4] + a[5] + '-' + a[6] + a[7] + a[8] + a[9];
    } else {
        return 'Kintamasis turi buti masyvas';
    }
}
let b = [3, 5, 2, 1, 4, 0, 9, 7, 8, 6];
console.log(telefonoNumeris(b));
    