function printVowels(string){
  var str,vowelsFound, vowelList;
  str = string.toLowerCase();
  vowelList = ['a', 'e', 'i', 'o', 'u'];
  vowelsFound ="";
  for (const x of str) {
    if (vowelList.indexOf(x) !== -1) {
      vowelsFound += x;
    }
  }
  vowelsFound = Array.from(new Set(vowelsFound)).join(", ");
  console.log("vowels: " + vowelsFound);
}

printVowels("Umuzi");
