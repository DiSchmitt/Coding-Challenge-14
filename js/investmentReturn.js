//Task 1: Create this module
//Task 4:Design a module to calculate the future value of an investment with the formula: A = P(1 + r/n)^(nt).
//I had to slightly alter the formula so that the script would recognize 'nt' as being n*t and not an entirely new parameter.
const dividend = (P, r, n, t,) => P(1 + r/n)^(n*t)