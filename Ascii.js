
// From Ascii to Character
let asciiNumber = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
let asciiValue = String.fromCharCode(asciiNumber)
console.log(asciiValue)


//From Letter to ascii
function letterToAscii(l){
   let result = ""
   for (let i = 0; i< l.length; i++){
      result += l.charCodeAt(i) + "|"
   }
   console.log("Your Letters in Ascii are: " + result )
}

letterToAscii("#")

