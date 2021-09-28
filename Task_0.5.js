function areaOfTriangle(a, b, c) {
    const semiPerimeter = 1/2 *(a + b + c);
    let semiP, area;
    semiP = semiPerimeter;
    area = Math.sqrt(semiP*(semiP-a)*(semiP-b)*(semiP-c));
    return area;
}

console.log(areaOfTriangle(3, 4, 5));
console.log(areaOfTriangle(5, 5, 5));
