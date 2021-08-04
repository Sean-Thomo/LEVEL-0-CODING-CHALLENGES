function areaOfTriangle(a, b, c) {
    var semiPerimeter = 1/2 *(a + b + c);
    var s, area;
    s = semiPerimeter;
    area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
}

areaOfTriangle(3, 4, 5);
areaOfTriangle(5, 5, 5);
