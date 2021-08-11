function commonLetters(stringOne, stringTwo) {
    let common = "";
    let output = "";
    stringOne, stringTwo.toLowerCase();
    
    for (const i of string_1){
        for (const x of string_2){
            if (i === x){
                output += x;
            }
        }
    }
    common = Array.from(new Set(output.slice(', '))).toString();
    console.log("Common letters: " + common)
}
commonLetters('house', 'computers');
