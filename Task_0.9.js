function printVowels(string){
  var str,vowelsFound, vowelList;
  str = string.toLowerCase();
  vowelList = ['a', 'e', 'i', 'o', 'u'];
  vowelsFound = "";

  for (const char of str) {
    if (vowelList.indexOf(char) !== -1) {
      vowelsFound += char;
    }
  }
  console.log("Vowels :" + vowelsFound);
}

printVowels("Umuzi today")