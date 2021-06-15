function commonLetters(string_1, string_2) {
    var common = "";
    string_1, string_2.toLowerCase();
    for (const i of string_1){
        for (const x of string_2){
            if (i === x){
                common += x;
            }
        }
    }
    console.log("Common letters: " + common)
}
commonLetters('house', 'computers');