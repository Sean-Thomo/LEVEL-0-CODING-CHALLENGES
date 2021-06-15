function printVowels(string){
  var str,vowelsFound, vowelList;
  str = string.toLowerCase();
  vowelList = ['a', 'e', 'i', 'o', 'u'];
  vowelsFound = "";

  //Iterate over characters in the string
  for (const char of str) {
    if (vowelList.indexOf(char) !== -1) {
      vowelsFound +=" " + char;
    }
  }
  console.log("Vowels :" + vowelsFound);
}

printVowels("umuzi today")
printVowels("Umuzi today")
