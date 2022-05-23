//1. Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.

function printOdss1To20() {
    for (i = 1; i <= 20; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}
printOdss1To20();

//2. Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

function decreasingMultiplesof3 () {
    for (i = 100; i >= 0; i--) {
        if (i % 3 ==0) {
            console.log(i);
        }
    }
}
decreasingMultiplesof3();

//3. Print the sequence
//Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.

function printTheSequence() {
    var i = 4;
    while (i > -4) {
        console.log(i);
        i = i - 1.5;
    }
}
printTheSequence();

//4. Sigma
//Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

function sigma() {
    var count = 0;
    for (i = 1; i <= 100; i++) {
        if (i == 100){
            console.log(i + " =");
        }
        else {
            console.log(i + " +");
        }
        count = count + i;
    }
    console.log(count);
}
sigma();

//5. Factorial
//Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.

function factorial() {
    var count = 1;
    for (i = 1; i <= 12; i++) {
        if (i == 12) {
            console.log(i + " =");
        }
        else {
            console.log(i + " *");
        }
        count = count * i;
    }
    console.log(count);
}
factorial();