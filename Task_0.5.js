function areaOfTriangle(a, b, c) {
    const semiPerimeter = 1/2 *(a + b + c);
    let s, area;
    s = semiPerimeter;
    area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}

console.log(areaOfTriangle(3, 4, 5));
console.log(areaOfTriangle(5, 5, 5));
