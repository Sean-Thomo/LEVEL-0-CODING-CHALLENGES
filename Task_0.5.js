function areaOfTriangle(a, b, c) {
    //Calculating the SemiPerimeter
    var semiPerimeter = 1/2 *(a + b + c);
    var s, area;
    s = semiPerimeter;
    // Herons formula
    area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(area);
}

areaOfTriangle(3, 4, 5);
areaOfTriangle(5, 5, 5);
