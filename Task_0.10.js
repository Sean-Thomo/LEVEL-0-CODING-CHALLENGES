function commonLetters(string_1, string_2) {
    var common = "";
    var output = "";
    string_1, string_2.toLowerCase();
    //Iterate over characters in string1
    for (const i of string_1){
        //Iterate over characters in string2
        for (const x of string_2){
            if (i === x){
                output += x + "," ;
            }
        }
    }
    //remove any duplicate letters from "output"
    common = Array.from(new Set(output.split(','))).toString();
    console.log("Common letters: " + common)
}
commonLetters('house', 'computers');
