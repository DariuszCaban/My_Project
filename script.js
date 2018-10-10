/*Zadanie 1*/

var zmienna1 = 10;
var zmienna2 = 20;

if (zmienna1 > zmienna2){
    console.log("zmienna1");
} else {
    console.log("zmienna2");
}

/*Zadanie 2*/

var liczba1 = 10;
var liczba2 = 20;
var liczba3 = 30;

if (liczba1 > liczba2 && liczba1 > liczba3 ){
    console.log("liczba1");
}else if(liczba2 > liczba1 && liczba2 > liczba3){
    console.log("liczba2");
}else {
    console.log("liczba3");
}

/*Zadanie 3*/

var word = "Lubię javascript";
for (var i=0; i<10; i++) {
    console.log(word);
}

/*Zadanie 4*/

var result = 0;
for(var i=1; i<=10; i++) {
    result = result + i;
    console.log(result);
}
/* Zadanie 5*/

var n = 5;
for(var i=0; i<=n; i++) {
    if (i%2 == 0){
        console.log(i + " - parzysta");

    } else {
        console.log(i + " - nieparzysta");
    }


}

/* Zadanie 6*/


for(var i=0; i<3; i++) {
    for(var j=0; j<4; j++) {
        console.log(i + " - Bazyliszek" , j + " - Gargamel");

    }
}

// Zadanie 7

/*
 Pętla zewnętrzna z licznikiem o zmiennej ```i``` zajmuje się
wierszami, a pętla wewnętrzna z licznikiem o zmiennej ```j``` zajmuje się kolumnami.
Zaczynamy od lewej górnej gwiazdki i przemieszczamy się w prawo będąc w pierwszym wierszu.
Kiedy pętla wewnętrzna dojdzie do ostatniej kolumny, kończy działanie. Wtedy pętla zewnętrzna
zwiększa licznik o 1 (przechodzi do kolejnego wiersza) i tak dalej.
*/

//Zmienna, przechowująca wielkość naszego kwadratu
var size = 5;

//Zmienna przechowująca jedną linię gwiazdek
var lineOfStars = " ";

for(var i = 0; i < size; i++) {
    // W każdym kroku muszę zresetować zmienną, ponieważ zaczcynam tworzenie nowej linii
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        //Do zmiennej lineOfStars dodaje gwiazdkę
        lineOfStars = lineOfStars + "*";
    }
    // Oddzielam kazdą linię, pustym wierszem, ponieważ przeglądarka widząc 5 takich samych
    //wyników zwinie nasz kwadrat z gwiazdek do jednej linijki
    console.log(" ");

    //Wypisuje w konsoli zmienną lineOfStars (jej zawartość - dlatego jest bez cudzysłosów)
    console.log(lineOfStars);
}

/* Zadanie 8 */

var size1 = 5;
var lineOfStars1 = "";
for(var i=0; i<=size1; i++) {
    lineOfStars1 = "";

    for(var j=0; j<i; j++) {
        lineOfStars1 = lineOfStars1 + "*";
    }
        console.log(lineOfStars1);
    }

/* Zadanie 9 */

var size2 = 5;
var lineOfStars2 = " ";
for(var i=0; i<=size2; i++) {
    lineOfStars2 = "";

    for(var j=0; j<i; j++) {
        lineOfStars2 = lineOfStars2 + "*";
    }

    console.log(lineOfStars2);
}
var size3 = 5;
var lineOfStars3 = "";
for(var i=1; i<=size3; i++) {
    lineOfStars3 = "";

    for(var j=i; j<=size3; j++) {
        lineOfStars3 = lineOfStars3 + "*" ;
    }
    console.log(lineOfStars3 );
}

/* Tablice*/

/* Zadanie 1 */

var myNumbers = [10 ,100 ,1000];
console.log(myNumbers[0]);
console.log(myNumbers[1]);
console.log(myNumbers[2]);

/* Zadanie 2 */

var favoriteFruits = ["apple","orange","strawberries"];
console.log(favoriteFruits[0]);
console.log(favoriteFruits [favoriteFruits.length -1]);
for	(var i=0; i < favoriteFruits.length;	i++) {
    console.log(favoriteFruits[i]);
}

/* Zadanie 3 */

var myDigits = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for (var i = 0; i < myDigits.length; i++) {
    sum += myDigits[i];
}
console.log(sum);

/* Zadanie 4 */

var myDigits = [1,2,3,4,5,6,7,8,9,10];
var sum = 0;
for (var i = 0; i < myDigits.length; i++){
    if(myDigits[i] % 2 === 0){
        sum += myDigits[i]
    }
}

console.log(sum);

/* Zadanie 5 */

var myDigits = [1,2,3,4,5,6,7,8,9,10];
var max = 0;
for (var i = 0; i < myDigits.length; i++){
        if (max <= myDigits[i]) {
            max = myDigits[i];
        }
    }
console.log("Najwieksza liczba z tablicy to - ", max);



/* Zadanie 6 */

var myDigits = [6, 8, 9, 2, 1, 5, 1, 2, 9, 7];

var firstIndex = -1

for (var i = 0; i < myDigits.length; i++) {
    if (myDigits.indexOf(myDigits[i], i + 1) !== -1) {
        firstIndex = i
        break
    }
}
console.log(firstIndex)


/* Zadanie 7 */

var myDigits = [1,2,3,4,5,6,7,8,9,10];
for (var i = myDigits.length -1 ; i>=0 ; i--) {
    console.log(myDigits[i]);
}

