// 7. Do a swap on the sentence using the arguments provided and return the new sentence.

// swap("His name is Tom", "Tom", "john") == "His name is John".
// swap("Let us get back to more Coding", "Coding", "algorithms") == "Let us get back to more Algorithms".
// swap("This has a spellngi error", "spellngi", "spelling") == "This has a spelling error".

let swapWord = function(str, word1, word2) {


if(word1[0].toUpperCase() === word1[0]) {
    word2[0].toUpperCase()
} else {
    word2[0].toLowerCase()
}
   let arr = str.split(" ")
   let swapWord = arr.indexOf(word1)


   arr.splice(swapWord,1, word2)

   let newStr = arr.toString().split(",").join(" ")

   return newStr

}

console.log(swapWord("His name is Tom", "Tom", "john"))
console.log(swapWord("Let us get back to more Coding", "Coding", "algorithms"))
console.log(swapWord("This has a spellngi error", "spellngi", "spelling"))

