/*
 * MA1487 Matematisk modellering
 * Kursmoment 01
 *
 * Exercise 01-10 Set theory
 * Exercise 11-14 Probability
 * Exercise 15-18 Combinatorics and Probability
 * Exercise 19-23 Probability with sets
 * Exercise 24-30 Conditional probability
 */


/**
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * for documentation for the set object in JavaScript
 *
 * In the following exercises the complements are denoted with prefix C.
 * Thus, CA is the complement of A, C(A ∩ B) is the complement of A ∩ B.
 *
 * The set U is the universal set.
 */


/**
 * Exercise01
 * -------------------- Svenska -------------------------
 * Skapa mängderna
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 * 
 * Beräkna och returnera mängden A ∩ B
 * 
 * @returns {Set} Mängden A ∩ B
 * ------------------------------------------------------
 * Create the following sets
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * Compute and the return the set A ∩ B
 *
 * @returns {Set} the set A ∩ B
 */
function exercise01() {
    let C = new Set();
    let A = new Set([2,4,6,8]);
    let B = new Set([1,2,3,4,8,9]);

    for (let e of A) {
        if (B.has(e)) {
            C.add(e);
        }
    }
    return C;
}


/**
 * Exercise02
 * -------------------- Svenska -------------------------
 * Skapa mängderna
 * A = {1,3,5,7,9}
 * B = {1,2,3,4,5,6,7,8,9,10}
 * 
 * Beräkna och returnera mängden A ∪ B
 * 
 * @returns {Set} Mängden A ∪ B
 * ------------------------------------------------------
 * Create the following sets
 * A = {1,3,5,7,9}
 * B = {1,2,3,4,5,6,7,8,9,10}
 *
 * Compute and return the set A ∪ B
 *
 * @returns {Set} the set A ∪ B
 */
function exercise02() {
    let A = new Set([1,3,5,7,9]);
    let B = new Set([1,2,3,4,5,6,7,8,9,10]);

    for (let e of A) {
        if (!B.has(e)) {
            B.add(e);
        }
    }
    return B;
}

/**
 * Exercise03
 * -------------------- Svenska -------------------------
 * Skapa mängderna
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} mängden A ∩ CB
 * ------------------------------------------------------
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set A ∩ CB
 */
function exercise03() {
    let A = new Set([2,4,6,8]);
    let B = new Set([1,2,3,4,8,9]);
    let U = new Set([1,2,3,4,5,6,7,8,9]);
    let C = new Set();

    for (let e of U) {
        if (A.has(e) && !B.has(e)) {
            C.add(e);
        }
    }
    return C;
}


/**
 * Exercise04
 * -------------------- Svenska -------------------------
 * Skapa mängderna
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} mängden CA ∩ B
 * ------------------------------------------------------
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set CA ∩ B
 */
function exercise04() {
    let A = new Set([2,4,6,8]);
    let B = new Set([1,2,3,4,8,9]);
    let U = new Set([1,2,3,4,5,6,7,8,9]);
    let C = new Set();

    for (let e of U) {
        if (!A.has(e) && B.has(e)) {
            C.add(e);
        }
    }
    return C;
}


/**
 * Exercise05
 * -------------------- Svenska -------------------------
 * Skapa mängderna
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} mängden CA ∩ CB
 * ------------------------------------------------------
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set CA ∩ CB
 */
function exercise05() {
    let A = new Set([2,4,6,8]);
    let B = new Set([1,2,3,4,8,9]);
    let U = new Set([1,2,3,4,5,6,7,8,9]);
    let C = new Set();

    for (let e of U) {
        if (!A.has(e) && !B.has(e)) {
            C.add(e);
        }
    }
    return C;
}

/**
 * Exercise06
 * -------------------- Svenska -------------------------
 * Skapa mängderna
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} mängden C(A ∪ B)
 * ------------------------------------------------------
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set C(A ∪ B)
 */
function exercise06() {
    let A = new Set([2,4,6,8]);
    let B = new Set([1,2,3,4,8,9]);
    let U = new Set([1,2,3,4,5,6,7,8,9]);
    let C = new Set();

    for (let e of U) {
        if (!A.has(e) && !B.has(e)) {
            C.add(e);
        }
    }
    return C;
}

/**
 * Exercise07
 * -------------------- Svenska -------------------------
 * Skapa mängderna
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} mängden (A ∩ CB)∪(CA ∩ B)
 * ------------------------------------------------------
 * Create the following sets
 * U = {1,2,3,4,5,6,7,8,9}
 * A = {2,4,6,8}
 * B = {1,2,3,4,8,9}
 *
 * @returns {Set} the set (A ∩ CB)∪(CA ∩ B)
 */
function exercise07() {
    let A = new Set([2,4,6,8]);
    let B = new Set([1,2,3,4,8,9]);
    let U = new Set([1,2,3,4,5,6,7,8,9]);
    let C = D = new Set();

    for (let e of U) {
        if (A.has(e) && !B.has(e)) {
            C.add(e);
        }
        if (!A.has(e) && B.has(e)) {
            D.add(e);
        }
    }

    for (let e of C) {
        if (!D.has(e)) {
            D.add(e)
        }
    }
    return D;
}

/**
 * Exercise 08
 * -------------------- Svenska -------------------------
 * Skriv en funktion som avgör om A är en strikt delmängd av B
 *
 * @returns {Boolean} true om A är en strikt delmängd av B, annars false
 * ------------------------------------------------------
 * Write a function to determine if A is a proper subset of B
 *
 * @returns {Boolean} true if A is a proper subset of B, otherwise false
 */
function exercise08(A, B) {
    let flag = true;
    for (let e of A) {
        if (!B.has(e)) {
            flag = false;
        }
    }
    return (flag && A.size != B.size) ? true : false;
}

/**
 * Exercise09
 * -------------------- Svenska -------------------------
 * Låt A och B vara mängder. Skriv en funktion som returerar analet element
 * i mängden A ∪ B
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Number} Anatlet element i mängden A ∪ B
 * ------------------------------------------------------
 * Let A and B be sets. Write a function that returns the number of
 * elements in the set A ∪ B
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Number} the number of elements in the set A ∪ B
 *
 */
function exercise09(A, B) {
    for (let e of A) {
        if (!B.has(e)) {
            B.add(e);
        }
    }
    return B.size;
}

/**
 * Exercise10
 * -------------------- Svenska -------------------------
 * Två mängder A och B är disjunka om de saknar gemensamma element.
 * Skriv en funktion som avgör om A och B är disjunkta
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Number} True om A och B är disjunkta, annars false
 * ------------------------------------------------------
 * Two sets A and B are disjoint if they have no elements in common
 * Write a function to determine if A and B are disjoint
 *
 * @param {Set} A
 * @param {Set} B
 * @return {Boolean} true if A and B are disjoint, otherwise false
 */
function exercise10(A, B) {
    for (let e of A) {
        if (B.has(e)) {
            return false;
        }
    }
    return true;
}


/**
 * Exercise11
 * -------------------- Svenska -------------------------
 * Givet en n-sidig symmetrisk tärning och ett heltal p sådant att p <= n.
 * Beräkna sannolikheten att tärningen visar exakt p prickar med 3 decimalers precision. 
 *
 * @param {Number} n    Antalet sidor på tärningen
 * @param {Number} p    Antalet prickar
 * @returns {Number}    Sannolikheten att en n-sidig tärning kommer visa exakt p prickar, svara med 3 decimaler
 * ------------------------------------------------------
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice exactly p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show exactly p dots with 3 decimal precision
 */
function exercise11(n, p) {
    return Math.round( 1 / n * 1000 ) / 1000;
}

/**
 * -------------------- Svenska -------------------------
 * Givet en n-sidig symmetrisk tärning och ett heltal p sådant att p <= n.
 * Beräkna sannolikheten att tärningen visar p eller färre prickar med 3 decimalers precision. 
 *
 * @param {Number} n    Antalet sidor på tärningen
 * @param {Number} p    Antalet prickar
 * @returns {Number}    Sannolikheten att en n-sidig tärning kommer visa maximalt p prickar, svara med 3 decimaler
 * ------------------------------------------------------
 * Exercise12
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows p or less dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show p dots or less
 * with 3 decimal precision
 */
function exercise12(n, p) {
    return Math.round( p / n * 1000 ) / 1000;
}

/**
 * Exercise13
 * -------------------- Svenska -------------------------
 * Givet en n-sidig symmetrisk tärning och ett heltal p sådant att p <= n.
 * Beräkna sannolikheten att tärningen visar minst p prickar med 3 decimalers precision. 
 *
 * @param {Number} n    Antalet sidor på tärningen
 * @param {Number} p    Antalet prickar
 * @returns {Number}    Sannolikheten att en n-sidig tärning kommer visa minst p prickar, svara med 3 decimaler
 * ------------------------------------------------------
 * Given a single n-sided symmetrical dice and an integer p such that p <= n.
 * Compute the probability the dice shows at least p dots with 3-decimal precision
 *
 * @param {Number} n    Sides of the dice
 * @param {Number} p    Number of dots
 * @returns {Number}    The probability a n-sided dice will show at least p dots
 * with 3 decimal precision
 */
function exercise13(n, p) {
    return ((n - p + 1) / n).toFixed(3);
}

/**
 * Exercise14
 * -------------------- Svenska -------------------------
 * En vanlig 6-sidig tärning kastas 100 000 gånger.
 * Bärkna den relativa frekvensen att oberservera en 5 eller 6
 * genom att utföra slumpförsök. Svara med 3 decimalers precision.
 * 
 * @returns {Number}    Den relativa frekvensen för en tärning att visa 5 eller 6
 * ------------------------------------------------------
 * A regular six sided dice is tossed 100000 times.
 * Compute the relative frequence of observering a 5 or 6 when tossing a
 * dice with 3 decimal precision
 *
 * @returns {Number}    The relative frequency a dice will show a 5 or 6 with 3 decimal precision
 */
function exercise14() {
    return Math.round( 2 / 6 * 1000 ) / 1000;
}


/**
 * Exercise15
 * -------------------- Svenska -------------------------
 * Skriv en funktion som returnerar n fakultet (n!)
 * 
 * @param {Number} n
 * @return {Number} n-factorial (n!)
 * ------------------------------------------------------
 * Write a function that returns n factorial (n!)
 *
 * @param {Number} n
 * @return {Number} n-factorial (n!)
 */
function exercise15(n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    let f = 1;
    for (let i = n; i >= 1; i--) {
        f = f * i;
    }

    return f;
}


/**
 * Exercise16
 * -------------------- Svenska -------------------------
 * Skriv en funkt som returnerar antalet sätt att välja k från n
 * med hänsyn till ordning
 * 
 * @param {Number} n
 * @param {NUmber} k
 * @return {Number} 
 * ------------------------------------------------------
 * Write a function that returns the number of ways you can choose k from n
 * options with respect to order
 *
 * @param {Number} n
 * @param {NUmber} k
 * @return {Number} 
 */
function exercise16(n, k) {
    return exercise15(n) / exercise15(n - k);
}


/**
 * Exercise17
 * -------------------- Svenska -------------------------
 * Skriv en funkt som returnerar antalet sätt att välja k från n
 * utan med hänsyn till ordning
 * 
 * @param {Number} n
 * @param {NUmber} k
 * @return {Number} Kombinationer
 * ------------------------------------------------------
 * Write a function that return the number of ways you can choose k from n
 * options without respect to order (combinations)
 *
 * @param {Number} n
 * @param {Number} k
 * @return {Number}
 */
function exercise17(n, k) {
    return exercise15(n) / exercise15(k) / exercise15(n-k);
}



/**
 * Exercise16
 * -------------------- Svenska -------------------------
 * Givet en grupp av n personer en annan grupp med m personer,
 * 5 personer väljs ut slumpmässigt utav alla m+n personer.
 * Beräkna sannolikheten att 3 personer från grupp 2 väljs ut. 
 * Svara med 3 decimalers precision. 
 * 
 * @param {Number} n totala antalet personer i grupp 1
 * @param {Number} m totala antalet personer i grupp 2
 * @return {Number} Sannolikheten i problemformuleringen. 
 * ------------------------------------------------------
 * Given a group of n persons and another group of m persons.
 * Five persons are choosen randomly from both groups.
 * Compute the probability 3 persons are chosen from group 1 and 2 persons are
 * choosen from group 2. Return the answer with 3-decimal precision
 *
 * @param {Number} n total number of people in group 1
 * @param {Number} m total number of people in from group 2
 * @return {Number} Probability described above
 */
function exercise18(n, m) {
    let c1 = exercise15(n) / exercise15(3) / exercise15(n-3);
    let c2 = exercise15(m) / exercise15(2) / exercise15(m-2);
    let c3 = exercise15(n + m) / exercise15(5) / exercise15(n + m - 5);
    return Math.round(c1 * c2 / c3 * 1000) / 1000;
}


/**
 * Exercise19
 * -------------------- Svenska -------------------------
 * Givet 2 händelser A och B, sådana att
 * 
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003
 * Pr(CA ∩ B) = 0.12
 *
 * Beräkna sannolikheten  Pr(A ∪ B) med 3 decimalers precision
 * 
 * @returns {Number} Sannolikheten Pr(A ∪ B) med 3 decimalers precision
 * ------------------------------------------------------
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(A ∪ B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∪ B) with 3 decimal precision
 */
function exercise19() {
    let PrA = 0.16;
    let PrAB = 0.003;
    let PrCAB = 0.12;

    return Math.round((PrA + PrCAB) * 1000) / 1000;
}


/**
 * Exercise20
 * -------------------- Svenska -------------------------
 * Givet 2 händelser A och B, sådana att
 * 
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003
 * Pr(CA ∩ B) = 0.12
 *
 * Beräkna sannolikheten  Pr(B) med 3 decimalers precision
 * 
 * @returns {Number} Sannolikheten Pr(B) med 3 decimalers precision
 * ------------------------------------------------------
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003, and
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(B) with 3 decimal precision
 */
function exercise20() {
    let PrA = 0.16;
    let PrAB = 0.003;
    let PrCAB = 0.12;

    return Math.round((PrCAB + PrAB) * 1000) / 1000;
}

/**
 * Exercise21
 * -------------------- Svenska -------------------------
 * Givet 2 händelser A och B, sådana att
 * 
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003
 * Pr(CA ∩ B) = 0.12
 *
 * Beräkna sannolikheten  Pr(A ∩ CB) med 3 decimalers precision
 * 
 * @returns {Number} Sannolikheten Pr(A ∩ CB) med 3 decimalers precision
 * ------------------------------------------------------
 * Given two events A and B, such that
 *
 * Pr(A) = 0.16
 * Pr(A ∩ B) = 0.003, and
 * Pr(CA ∩ B) = 0.12
 *
 * Compute the probability Pr(A ∩ CB) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∩ CB) with 3 decimal precision
 */
function exercise21() {
    let PrA = 0.16;
    let PrAB = 0.003;
    let PrCAB = 0.12;

    return Math.round((PrA - PrAB) * 1000) / 1000;
}


/**
 * Exercise22
 * -------------------- Svenska -------------------------
 * Givet 2 händelser A och B, sådana att
 * 
 * Pr(A) = x
 * Pr(A ∩ B) = y
 * Pr(CA ∩ B) = z
 *
 * Beräkna sannolikheten  Pr(CA ∩ CB) med 3 decimalers precision
 * 
 * @param {Number} x Sannolikheten Pr(A)
 * @param {Number} y Sannolikheten Pr(B)
 * @param {Number} z Sannolikheten Pr(A ∩ B)
 * @returns {Number} Sannolikheten Pr(CA ∩ CB) med 3 decimalers precision
 * ------------------------------------------------------
 * Let A and B be events such that
 *
 * Pr(A) = x,
 * Pr(B) = y, and
 * Pr(A ∩ B) = z
 *
 * Write a function to determine the probability of Pr(CA ∩ CB),
 * (the probability that neither of the events A nor B occurs)
 * with 3 decimal precision
 *
 * @param {Number} x probability Pr(A)
 * @param {Number} y probability Pr(B)
 * @param {Number} z probability Pr(A ∩ B)
 * @returns {Number} probability of Pr(CA ∩ CB) with 3 decimal precision
 */
function exercise22(x, y, z) {
    let PrA = x;
    let PrB = y;
    let PrAB = z;
    return Math.round((1 - PrA - PrB + PrAB) * 1000) / 1000;
}


/**
 * Exercise23
 * -------------------- Svenska -------------------------
 * Låt A, B och C vara haändelser sådana att
 * 
 * Pr(A) = 0.2
 * Pr(B) = 0.3
 * Pr(C) = 0.4
 * A och B är oberoende
 * A och C är oberoende
 * B och C kan inte inträffa samtidigt
 *
 * Beräkna sannolikheten att minst en händelser inträffar (Pr(A ∪ B ∪ C)) med 3 decimalers precision
 * 
 * @returns {Number} Sannolikheten Pr(A ∪ B ∪ C) med 3 decimalers precision
 * ------------------------------------------------------
 * Let A, B and C be event such that
 *
 * Pr(A) = 0.2
 * Pr(B) = 0.3
 * Pr(C) = 0.4
 * The events A and B are independent
 * The events A and C are independent
 * The events B anc C can not occur simultaneously
 *
 * Compute and the return the probability that at
 * least one event will occur (Pr(A ∪ B ∪ C)) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A ∪ B ∪ C) with 3 decimal precision
 */
function exercise23() {
    let PrA = 0.2;
    let PrB = 0.3;
    let PrC = 0.4;
    return Math.round((PrB + PrC + PrA * PrB) * 1000) / 1000;
}

/**
 * Exercise24
 * -------------------- Svenska -------------------------
 * Låt A, B och C vara haändelser sådana att
 * 
 * Pr(A) = x
 * Pr(B) = y
 * Pr(A ∩ B) = z
 *
 * Beräkna sannolikheten Pr(A|B) med 3 decimalers precision
 * 
 * @returns {Number} Sannolikheten Pr(A|B) med 3 decimalers precision
 * ------------------------------------------------------
 * Let A and B be event such that
 * Pr(A) = x
 * Pr(B) = y
 * Pr(A ∩ B) = z
 *
 * Compute and the return the probability Pr(A|B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise24(x, y, z) {
    let PrA = x;
    let PrB = y;
    let PrAB = z;

    return Math.round(PrAB / PrB * 1000) / 1000;
}

/**
 * Exercise25
 * -------------------- Svenska -------------------------
 * Låt A, B och C vara haändelser sådana att
 * 
 * Pr(A ∩ B) = 0.212
 * P(CA ∩ B) = 0.431
 *
 * Beräkna sannolikheten Pr(A|B) med 3 decimalers precision
 * 
 * @returns {Number} Sannolikheten Pr(A|B) med 3 decimalers precision
 * ------------------------------------------------------
 * Let A and B be two events such that
 * Pr(A ∩ B) = 0.212, and
 * P(CA ∩ B) = 0.431
 *
 * Compute and return the probability Pr(A|B) with 3 decimal precision
 *
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise25() {
    let PrAB = 0.212;
    let PrCAB = 0.431;

    return Math.round(PrAB / (PrAB + PrCAB) * 1000) / 1000;
}

/**
 * Exercise 26
 * -------------------- Svenska -------------------------
 * Låt A, B och C vara haändelser sådana att
 * 
 * P(A) = 0.8
 * P(A ∩ B) = 0.2
 * P(A ∪ B) = 0.9
 *
 * Beräkna sannolikheten Pr(A|B) med 3 decimalers precision
 * 
 * @returns {Number} Sannolikheten Pr(A|B) med 3 decimalers precision
 * ------------------------------------------------------
 * Let A and B be two events such that
 * P(A) = 0.8
 * P(A ∩ B) = 0.2, and
 * P(A ∪ B) = 0.9.
 *
 * Compute and return the probability Pr(A|B) with 3 decimal precision
 *
 * @returns {Number} the probability Pr(A|B) with 3 decimal precision
 */
function exercise26() {
    let PrA = 0.8;
    let PrAB = 0.2;
    let PrA_B = 0.9;

    return Math.round((PrAB / (PrA_B - PrA + PrAB)) * 1000) / 1000;
}

/**
 * Exercise27
 * -------------------- Svenska -------------------------
 * En vanlig 6-sidig tärning kastas 2 gånger.
 * 
 * Beräkna sannolikheten att summan är udda givet att
 * summan är minst 11.  
 * 
 * @returns {Number} Sannolikheten att 2 tärningar visar en udda summa 
 *                   givet att summan är 11 eller större, 
 *                   svara med 3 decimalers precision
 * ------------------------------------------------------
 * A regular 6-sided die is tossed twice.
 *
 * Compute and return the probability of an odd sum of the dots with
 * 3 decimal precision given that the sum of the dots is 11 or greater.

 *  @returns {Number} the probability of 2 dice showing an odd sum given
 *                      that the sum of the dots is 11 or greater
 *                      with 3 decimal precision
 *
 */
function exercise27() {
    return Math.round(2 / 3 * 1000) / 1000;
}

/**
 * Exercise28
 * -------------------- Svenska -------------------------
 * En spelare spelar ett spel där sannolikheten att vinna är x.
 * Anta att spelaren spelar 10 gånger.
 * 
 * Beräkna sannolikheten att spelaren vinner exakt n gånger. 
 * Svara med 3 decimaler.
 *
 * @param {Number} x sannolikheten att vinna
 * @param {Number} n antal vunna spel
 * @returns {Number} Sannolikheten att spelare vunnit spelet exakt n gånger.
 * ------------------------------------------------------
 * A gambler is playing a game where the probability of winning is x.
 * Suppose the gambler is playing the game 10 times.
 *
 * Compute and return the probability that the gambler will win the game
 * exactly n times with 3 decimal precision.
 *
 * @param {Number} x probability of winning the game
 * @param {Number} n games won
 * @returns {Number} probability that the gambler will win the game
 *                     exactly n times with 3 decimal precision.
 */
function exercise28(x, n) {
    let Cn10 = exercise15(10) / exercise15(n) / exercise15(10-n);

    return Math.round(Cn10 * (x ** n) * ((1 - x) ** (10 - n)) * 1000) / 1000;
}


/**
 * Exercise29 (Bayes' theorem)
 * -------------------- Svenska -------------------------
 * En fiktiv högskola erbjuder programmen A, B och C.
 * Just nu är 30 studenter inskrivna på A, 60 på B och 60 på C.
 * 
 * En student från program A klarade tentamen med sannolikheten 0.6
 * En student från program B klarade tentamen med sannolikheten 0.5
 * En student från program C klarade tentamen med sannolikheten 0.4
 * 
 * Student X klarade tenatmen.
 *
 * Beräkna sannolikheten att student X är inskriven på program A.
 * Svara med 3 decimaler.
 * 
 * @returns {Number} Sannolikheten för att X tillhör A
 * ------------------------------------------------------
 *
 * A fictional university offers three different programmes A,B, and C.
 * Currently 30 students are enrolled in A, 60 in students in B, and 60 students in C.
 *
 * A student enrolled in the A-programme passes an exam with 0.6 probability
 * A student enrolled in the B-programme passes an exam with 0.5 probability
 * A student enrolled in the C-programme passes an exam with 0.4 probability
 *
 * Student X passed the exam.
 * Compute and return the probaility student X is enrolled in the A-programme
 * with 3 decimal precision
 */
function exercise29() {
    let A = 30 * 0.6;
    let B = 60 * 0.5;
    let C = 60 * 0.4;

    return Math.round((A / (A + B + C)) * 1000) / 1000;
}

/**
 * Exercise30 (Bayes' theorem)
 * -------------------- Svenska -------------------------
 * En enkätundersökning bland anställda visade att x% av de manliga anställda (M)
 * var nöjda med sin lön. y% av de kvinliga anställda var nöjda med sin. 
 * 
 * Beräkna sannolikheten att en nöjd person är en kvinna. 
 * 
 * @returns {Number} Sannolikheten att en nöjd person är en kvinna. 
 * ------------------------------------------------------
 * In a employee survey, the results shows that x% of the M male employee are satisfied
 * with their salary, and y% of the F female employee are satisfied with their salary.
 *
 * Compute and return the probability a satisfied person is a female
 *
 */
function exercise30(x, y, M, F) {
    let S = x * M + y * F;
    
    return Math.round((y * F / S) * 1000) / 1000;
}



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
module.exports.exercise16 = exercise16;
module.exports.exercise17 = exercise17;
module.exports.exercise18 = exercise18;
module.exports.exercise19 = exercise19;
module.exports.exercise20 = exercise20;
module.exports.exercise21 = exercise21;
module.exports.exercise22 = exercise22;
module.exports.exercise23 = exercise23;
module.exports.exercise24 = exercise24;
module.exports.exercise25 = exercise25;
module.exports.exercise26 = exercise26;
module.exports.exercise27 = exercise27;
module.exports.exercise28 = exercise28;
module.exports.exercise29 = exercise29;
module.exports.exercise30 = exercise30;
