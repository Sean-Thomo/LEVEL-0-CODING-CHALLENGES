function commonLetters(string_1, string_2) {
    var common = "";
    string_1, string_2.toLowerCase();
    //Iterate over characters in string1
    for (const i of string_1){
        //Iterate over characters in string2
        for (const x of string_2){
            if (i === x){
                common +=" " + x;
            }
        }
    }
    console.log("Common letters: " + common)
}
commonLetters('house', 'computers');
