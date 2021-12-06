/**
 * MA1487 matmod
 * Inlämning 2
 */

// TODO: Write your name here
// TODO: Write your acronym here


// Install gaussian by typing "npm install gaussian" in the terminal. 
// Documentation can be found here: https://www.npmjs.com/package/gaussian
const gaussian = require('gaussian');

function distribution(mean, stdDev) {
    return gaussian(mean, Math.pow(stdDev, 2));
}

/**
 * How to create a distribution for exercise01-09
 *
 * const dist = distribution(mean, stdDev);
 *
 * Probability Functions
 *
 * dist.pdf(x): Pr(X=x), the probability density function, which describes the probability of a random variable taking on the value x
 * dist.cdf(x): Pr(X≤x) the cumulative distribution function, which describes the probability of a random variable falling in the interval (−∞, x]
 * dist.ppf(x): the percent point function, the inverse of cdf
 *
 */

/**
 * -------------------- Svenska -------------------------
 * Aritmetiskt medelvärde
 * 
 * Skriv en funktion som beräknar och returnerar det aritmetiska medelvärdet
 * för elementen i vektorn x med 4 decimalers precision. 
 * 
 * @param {number[]} x
 * @return {number} Aritmetiskt medelvärde för elementen i vektorn x
 * ------------------------------------------------------
 * Arithmetic mean
 *
 * Write a function that computes and return the arithmetic mean of the elements
 * in the array x with 4 decimal precision.
 *
 * @param {number[]} x
 * @return {number} The arithmetic mean of the elements in the array x
 */
function mean(x) {
    let sum = 0;
    x.forEach(function(e) {
        sum += e;
    });

    return Math.round(sum / x.length * 10000) / 10000;
}

/**
 * -------------------- Svenska -------------------------
 * Standardavvikelse för stickprov
 * 
 * Skriv en funktion som beräknar och returnerar det standardavvikelsen 
 * för stickprov för elementen i vektorn x med 4 decimalers precision. 
 * 
 * @param {number[]} x
 * @return {number} Standardavvikelse för stickprov för elementen i vektorn x
 * ------------------------------------------------------
 * Standard deviation
 *
 * Write a function that computes and the sample standard deviation of the elements in
 * the array x with 4 decimal precision. 
 * 
 * OBS!!! This is the bias corrected version!
 *
 * @param {number[]} x
 * @return {number} The standard deviation of the elements in x
 */

function standardDeviation(x) {
    const m = mean(x);
    let sum = 0;
    x.forEach(function(e) {
        sum += (e - m) ** 2;
    });

    return Math.round(Math.sqrt(sum / (x.length - 1)) * 10000) / 10000;
}

/**
 * Exercise01
 * 
 * -------------------- Svenska -------------------------
 * 
 * @return {number} Sannolikheten för Pr(X ≤ 1.2) då X är N(0,1) med 4 decimalers precision
 * ------------------------------------------------------
 *
 * @return {number} The probability of Pr(X ≤ 1.2) when X is N(0,1) with 4 decimal precision
 */
function exercise01() {
    const dist = distribution(0, 1);

    return Math.round(dist.cdf(1.2) * 10000) / 10000;
}

/**
 * exercise02
 * 
 * -------------------- Svenska -------------------------
 * 
 * @return {number} Sannolikheten för Pr(X > 1.2) då X är N(0,1) med 4 decimalers precision
 * ------------------------------------------------------
 *
 * @return {number} The probability of Pr(X > 1.2) when X is N(0,1) with 4 decimal precision
 */
function exercise02() {
    const dist = distribution(0, 1);

    return Math.round((1 - dist.cdf(1.2)) * 10000) / 10000;
}

/**
 * exercise03
 * 
 * -------------------- Svenska -------------------------
 * 
 * @return {number} Sannolikheten för Pr(X ≤ 7) då X är N(5,2) med 4 decimalers precision
 * ------------------------------------------------------
 *
 * @return {number} The probability of Pr(X ≤ 7) when X is N(5,2) with 4 decimal precision
 */
function exercise03() {
    const dist = distribution(5, 2);

    return Math.round(dist.cdf(7) * 10000) / 10000;
}

/**
 * exercise04
 * 
  * -------------------- Svenska -------------------------
 * 
 * @return {number} Sannolikheten för Pr(3 < X ≤ 5) då X är N(5,2) med 4 decimalers precision
 * ------------------------------------------------------
 *
 * @return {number} The probability of Pr(3 < X ≤ 5) when X is N(5,2) with 4 decimal precision
 */
function exercise04() {
    const dist = distribution(5, 2);
    const p = dist.cdf(5) - dist.cdf(3);

    return Math.round(p * 10000) / 10000;
}

/**
 * exercise05
 * 
* -------------------- Svenska -------------------------
 * 
 * @return {number} Sannolikheten för Pr(X ≤ -1) då X är N(0,1) med 4 decimalers precision
 * ------------------------------------------------------
 *
 * @return {number} The probability of Pr(X ≤ -1) when X is N(0,1) with 4 decimal precision
 */
function exercise05() {
    const dist = distribution(0, 1);
    return Math.round(dist.cdf(-1) * 10000) / 10000;
}

/**
 * exercise06
 * 
 * -------------------- Svenska -------------------------
 * 
 * @param {number} mean medelvärde μ
 * @param {number} stdDev standardavvikelse σ
 * @param {number} a undre gräns
 * @param {number} b övre gräns
 * 
 * @return {number} Sannolikheten Pr(a ≤ X ≤ b) då X är N(μ,σ) med 4 decimalers precision
 * ------------------------------------------------------
 *
 * @param {number} mean mean μ
 * @param {number} stdDev standard deviation σ
 * @param {number} a lower bound
 * @param {number} b upper bound
 * 
 * @return {number} the probability of Pr(a ≤ X ≤ b) when X is
 * N(μ,σ) with 4 decimal precision
 */
function exercise06(mean, stdDev, a, b) {
    const dist = distribution(mean, stdDev);
    const p = dist.cdf(b) - dist.cdf(a);

    return Math.round(p * 10000) / 10000;
}

/**
 * -------------------- Svenska -------------------------
 * En kaffeautomat fördelar kaffe på ett sådant sätt att volymen
 * är normalfördelad med väntevärde 1.8 dl och standardavvikelse 0.1 dl
 * 
 * En kaffekopp har en volym av 2.0 dl. 
 * 
 * Beräkna och returnera sannolikheten med 3 decimalers precision 
 * för att en kopp kommer att översvämmas
 * ------------------------------------------------------
 * 
 * exercise07
 *
 * A coffee vending machine dispenses coffee, in a way such that the volume
 * is normally distributed with mean 1.8 dl and standard deviation 0.1 dl.
 *
 * A coffee cup can hold up to 2.0 dl of coffee.
 *
 * Calculate and return the probability with 3 decimal precision that a cup
 * will be overflowed
 *
 * @return {number} The probability of a cup will be overflown with 3 decimal precision.
 *
 */
function exercise07() {
    const mean = 1.8;
    const stdDev = 0.1;
    const dist = distribution(mean, stdDev);

    return Math.round((1 - dist.cdf(2)) * 1000) / 1000;
}

/**
 * -------------------- Svenska -------------------------
 * Låt X och Y vara två oberoende stokastiska variabler där 
 * X är N(a, b) och Y är N(c, d) fördelade. 
 * Då gäller att Z = X + Y är N(a+c, sqrt(b^2 + d^2)), och
 * Z = X - Y är N(a-c, sqrt(b^2 + d^2))
 * 
 * Returnera sannolikheten för Pr(X+Y ≤ 2) då X är N(2, 3) och Y är N(1, 4) fördelade
 * med 4 decimalers precision
 * ------------------------------------------------------
 * 
 * Let X and Y be two independent stochastic variables such that X is N(a,b)
 * and Y is N(c,d). Then  Z = X+Y is N(a+c,sqrt(b^2 + d^2)), and Z = X-Y is N(a-c, sqrt(b^2+d^2))
 * *
 * Return the probability of Pr(X+Y ≤ 2) when X is N(2,3), and Y is N(1,4) with 4 decimal precision
 * @return {number}
 */
function exercise08() {
    const a = 2, b = 3, c = 1, d = 4;
    const mean = a + c;
    const stdDev = Math.sqrt(b ** 2 + d ** 2);
    const dist = distribution(mean, stdDev);
    
    return Math.round(dist.cdf(2) * 10000) / 10000;
}

/**
 * -------------------- Svenska -------------------------
 * Studenters poäng på test A är normalfördelade med väntevärde 48 och standardavvikelse 5
 * Studenters poäng på test B är normalfördelade med väntevärde 40 och standardavvikelse 4
 * 
 * Låt X representera resultatet från en slumpmässigt utvald student som gjorde test A
 * Låt Y representera resultatet från en slumpmässigt utvald student som gjorde test B
 * 
 * Beräkna och returnera sannolikheten Pr(X > Y) med 4 decimalers precision
 * 
 * Ledtråd: Pr(X > Y) = Pr(X-Y > 0)
 * ------------------------------------------------------
 * 
 * The score of student test A is normally distributed with mean 48 and standard deviation 5
 * The score of student test B is normally distributed with mean 40 and standard deviation 4
 *
 * Let X be the result from a random choosen student who took test A
 * Let Y be the result from a random choosen student who took test B
 *
 * Calculate and return the probaility Pr(X > Y) with 4 decimal precision
 * Hint. Pr(X > Y)= Pr(X-Y > 0)
 */
function exercise09() {
    const a = 48, b = 5, c = 40, d = 4;
    const mean = a - c;
    const stdDev = Math.sqrt(b ** 2 + d ** 2);
    const dist = distribution(mean, stdDev);
    
    return Math.round((1 - dist.cdf(0)) * 10000) / 10000;
}

/**
 * -------------------- Svenska -------------------------
 * Y är en linjärkombination av X så att Y = a*X + b.
 * Beräkna väntevärdet för Y, dvs. E[Y], givet väntevärde för X
 * 
 * @param {Number} eX är väntevärdet för den stokastiska variablen X
 * @param {Number} a är en konstant
 * @param {Number} b är en konstant
 * ------------------------------------------------------
 * 
 * Y is a linear combination of X such that Y = a*X + b.
 * Calculate the expected value for Y, i.e. E[Y], given the expected value of X
 * 
 * @param {Number} eX is the expected value of the stocastic variable X
 * @param {Number} a is a constant
 * @param {Number} b is a constant
 */
function exercise10(eX, a, b) {
    return  a * eX + b;
}

/**
 * -------------------- Svenska -------------------------
 * Y är en linjärkombination av X så att Y = a*X + b.
 * Beräkna variansen för Y, dvs. V[Y], givet variansen för X
 *
 * @param {Number} vX är variansen för den stokastiska variablen X
 * @param {Number} a är en konstant
 * @param {Number} b är en konstant
 * ------------------------------------------------------
 * 
 * Y is a linear combination of X such that Y = a*X + b.
 * Calculate the variance of Y, i.e. V[Y], given the variance of X
 * 
 * @param {Number} vX is the variance of the stocastic variable X
 * @param {Number} a is a constant
 * @param {Number} b is a constant
 */
function exercise11(vX, a, b) {
    const vY = a ** 2 * vX;
    return vY;
}

/**
 * -------------------- Svenska -------------------------
 * Du spelar ett chansspel där oddsen är emot dig.
 * Du har 5% chans att vinna varje gång du spelar. 
 * Om du vinner får du 20 gånger insatsen.
 * Om du spelar splet 50 gånger, vad är sannolikheten 
 * att du går med vinst?
 * ------------------------------------------------------
 * 
 * You play a game of chance where the odds at stacked against you.
 * You have a 5% chance of winning and when you win you get paid 20 times 
 * the stake. 
 * If you play the game 50 times, what is the probability of the 
 * game being porfitable for you?
 * 
 * @return {Number} The probability of profit with 4 decimals
 */
function exercise12() {
    // formula: P = nCx * p^x * (1-p)^(n-x) = n! / (r! * (n-r)!) * p^x * (1-p)^(n-x)
    const P0 = 1 * Math.pow(0.05, 0) * Math.pow(0.95, 50);
    const P1 = 50 * Math.pow(0.05, 1) * Math.pow(0.95, 49);
    const P2 = (49 * 50 / 2) * Math.pow(0.05, 2) * Math.pow(0.95, 48);

    return Math.round((1 - P0 - P1 - P2) * 10000) / 10000;
}

/**
 * -------------------- Svenska -------------------------
 * Upprepa exercise12 men approximera sannolikhetsfördelningen med
 * Poissonfördelningen. Returnera differensen mellan det
 * approximerade svaret och svaret i exercise12.
 * ------------------------------------------------------
 * 
 * Redo exercise12 but approximate the distribution using the
 * Poisson distribution. Return the difference between this answer 
 * and the one in exercise12.
 * 
 * @return {Number} Difference between exercise12 and its Poisson approximation
 */
function exercise13() {
    // formula: P(x=k) = (Ev ^ k) * (e ^ (-Ev)) / k!
    const Ev = 50 * 0.05;
    const P0 = Math.pow(Ev, 0) * Math.exp(-Ev) / 1;
    const P1 = Math.pow(Ev, 1) * Math.exp(-Ev) / 1;
    const P2 = Math.pow(Ev, 2) * Math.exp(-Ev) / 2;
    const P = Math.round((1 - P0 - P1 - P2) * 10000) / 10000;

    return P - exercise12();
}

/**
 * -------------------- Svenska -------------------------
 * I en unersökning tillfrågades en stor grupp vilka
 * frukostflinger de föredrog, märke A, B eller C. 
 * pA av gruppen föredrog A
 * pB av gruppen föredrog B
 * Således föredrog resten C. 
 * 
 * Beräkna korrelationskoefficienten mellan grupp A och B.
 * ------------------------------------------------------
 * 
 * In a servey a large group were asked which brand of serial they preferred A, B or C.
 * pA of the group preferred A.
 * pB of the group preferred B.
 * Hence the rest preferred C.
 * 
 * Calculate the correlation coefficient between group A and B. 
 * 
 * @param {Number} pA Probability of preferring product A
 * @param {Number} pB Probability of preferring product B
 * 
 * @return {Number} Correlation coefficient between A and B with 4 decimals. 
 */
function exercise14(pA, pB) {
    const A = [0.1, 0.2, 0.3, 0.4];
    const B = [0.2, 0.3, 0.3, 0.2];
    let sumPa = 0, sumPb = 0, sumPa2 = 0, sumPb2 = 0, sumPab = 0;
    let n = A.length;
    
    for (let i = 0; i < A.length; i++) {
        sumPa += A[i];
        sumPb += B[i];
        sumPa2 += A[i] ** 2;
        sumPb2 += B[i] ** 2;
        sumPab += A[i] * B[i];
    }
    // return Math.round(sumPab * 10000) / 10000;

    const r = (n *sumPab - sumPa * sumPb) / (Math.sqrt(n * sumPa2 - sumPa ** 2) * Math.sqrt(n * sumPb2 - sumPb ** 2));
    
    return Math.round(r * 10000) / 10000;
}

/**
 * -------------------- Svenska -------------------------
 * Kommunen har fått in 36 propositioner som de behöver behandla 
 * vid nästa möte.
 * En tidigare studie kom fram till att det tar 3 minuter
 * i genomsnitt att behandla en proposition, med en standardavvikelse
 * på 1 minut. Studien kunde inte avgöra om dessa var normalfördelade.
 * 
 * Hur långt möte ska bokas in för att man med 95% sannolikhet ska
 * hinna behandla alla propositioner? (Avrunda upp till närmaste minut)
 * 
 * @return {Number} Antal minuter som behövs för mötet, avrundat upp.
 * ------------------------------------------------------
 * 
 * The municipality have recived 36 proposition that they need to address at 
 * the next meeting.
 * A previous study has shown that it on average takes 3 minutes to address each proposition,
 * with a standard deviation of 1. The study could not conclude if they were normal distributed. 
 * 
 * How long meet should be booked so that with all proposition will be handled
 * with 95% probability? (Round up to nearest minute)
 * 
 * @return {Number} Minutes needed for the meeting rounded up.
 */
function exercise15() {
    return 0;
}




module.exports.mean = mean;
module.exports.standardDeviation = standardDeviation;
module.exports.exercise01 = exercise01;
module.exports.exercise02 = exercise02;
module.exports.exercise03 = exercise03;
module.exports.exercise04 = exercise04;
module.exports.exercise05 = exercise05;
module.exports.exercise06 = exercise06;
module.exports.exercise07 = exercise07;
module.exports.exercise08 = exercise08;
module.exports.exercise09 = exercise09;
module.exports.exercise10 = exercise10;
module.exports.exercise11 = exercise11;
module.exports.exercise12 = exercise12;
module.exports.exercise13 = exercise13;
module.exports.exercise14 = exercise14;
module.exports.exercise15 = exercise15;
