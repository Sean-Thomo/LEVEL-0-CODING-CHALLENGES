function printVowels(string){
  var str,vowelsFound, vowelList;
  str = string.toLowerCase();
  vowelList = ['a', 'e', 'i', 'o', 'u'];
  vowelsFound = "";

  //Iterate over characters in the string
  for (const x of str) {
    if (vowelList.indexOf(x) !== -1) {
      vowelsFound +=x + ", "
    }
  }
  vowelsFound = Array.from(new Set(vowelsFound.split(', '))).toString();
  console.log("Vowels :" + vowelsFound);
}

printVowels("Umuzi")
