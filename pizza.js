//Thomas Koek
//Pizza calculator
var PizzaSmall = prompt("Hoeveel pizza's small wilt u?"); //Prompt voor het invoeren van pizza small
var PizzaMedium = prompt("Hoeveel pizza's medium wilt u?"); //Prompt voor het invoeren van pizza medium
var PizzaLarge = prompt("Hoeveel pizza's Large wilt u?"); //Prompt voor het invoeren van pizza large
const SMALL = 6.00 ; //Prijs pizza small
const MEDIUM = 10.49 ; //Prijs pizza medium
const LARGE = 12.49 ; //Prijs pizza large
var PrijsSmall = PizzaSmall * SMALL; //Berekening prijs van pizza small
var PrijsMedium = PizzaMedium * MEDIUM; //Berekening prijs van pizza medium
var PrijsLarge = PizzaLarge * LARGE; //Berekening prijs van pizza medium
var PrijsTotaal = PrijsSmall + PrijsMedium + PrijsLarge; //Berekening prijs van alle pizza's
document.write(PizzaSmall + " pizza's small: dat is " + PizzaSmall * SMALL + " euro" +  "<br>"); //Aantal pizza small + prijs laten zien
document.write(PizzaMedium +  " pizza's medium: dat is " + PizzaMedium * MEDIUM + " euro" + "<br>"); //Aantal pizza medium + prijs laten zien
document.write(PizzaLarge + " pizza's large: dat is " + PizzaLarge * LARGE + " euro" + "<br>"); //Aantal pizza large + prijs laten zien
document.write("Prijs totaal= " + PrijsTotaal); //Totaal van alle pizza's bij elkaar laten zien