//Business Logic
// export default function FUNCTION NAME()

export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.vowelCount = 0;
  }

  vowelChecker(line) {
    let vowelCount = 0;
    let silentEregex = /[aeiou][^aeiou]e\b/;
    
    const array = line.split('');
    let arrayTwo = line.split(' ');
   
    for(let i = 0; i <= arrayTwo.length; i++) {
      if(silentEregex.test(arrayTwo[i]) === true) {
        vowelCount--;
      };
        array.forEach(function(word) {
      if (word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u")) {
        vowelCount++; 
      }
    })
    return vowelCount;
  }}
  haikuChecker() {
    if ((this.vowelChecker(this.line1) === 5) && (this.vowelChecker(this.line2) === 7) && (this.vowelChecker(this.line3) === 5)) {
      return true;
    } else {
      return false;
    }
  }
  // silentVowelChecker(line) {
  //   let silentEregex = /[aeiou][^aeiou]e\b/;
  //   let array = line.split(' ');
  //   for(let i = 0; i <= array.length; i++) {
  //     if(silentEregex.test(array[i]) === true) {
  //       this.vowelCount--;
  //     }
  //   }
  // }
}



 

// TEST INPUT
// let input1 = new Haiku("cat hat bat", "fat hat shoe", "goop man");
// let input2 = new Haiku(["cat", "hat", "bat", "gab", "got"], ["fat", "hat", "shoe"], ["goop", "man"]);

// input1.splitString(input1.line1);
// input1.vowelChecker(input1.line1);
// input2.vowelChecker(input2.line2);










  //Poem should have 3 lines.
  //Should we have 3 separate line inputs or have a single input that automatically breaks into 3 lines??
  //Syllables should be 5, 7, 5
  //How do we identify syllables??
  //-Break up strings into separate words.
  //-Identify how many vowels are in a word.
  //-Subtract silent vowels ('e' at the end of a word).
  //-Subtract 1 vowels from every diphthong (ea, oi, oy, ee,...).
  //-Divide between 2 middle consonants (hap/pens, bas/ket, let/ter, sup/per, din/ner,..).
  //-Divide
  //Create a constructor and prototypes for each step.

  // splitString(line) {
  //     const array = line.split(' ');
  //     return array;
  //   }

  // vowelChecker(line) {
  //   const array = line.split(' ');
  //   const vowels = ["a", "e", "i", "o", "u"];
  //   let vowelCount = 0;
  //   array.forEach(function(word) {
  //     if (word.includes(vowels)) {
  //       vowelCount++; 
  //     }
  //   })
  //   return vowelCount;
  // }

//   var regex = /[a-z]ear/;
// console.log(regex.test('fear'));
// // returns true
// console.log(regex.test('tear'));
// // returns true

// let silentEregex = /[aeiou][^aeiou]e\b/g;
// console.log(silentEregex.test('temple'));
// // returns false
// console.log(silentEregex.test('whale'));
// //returns true
// console.log(silentEregex.test('scale'));
// //returns true


// SILENT VOWEL CHECKER
// let test = "temple whale scale";

//   function silentVowelChecker(line) {
//     let silentEregex = /[aeiou][^aeiou]e\b/;
//     let array = line.split(' ');
//     let vowelCount = 0;
//     for(let i = 0; i <= array.length; i++) {
//       if(silentEregex.test(array[i]) === true) {
//         console.log(array[i]);
//         vowelCount++;
//       }
//     }
//     return vowelCount;
//   }

// silentVowelChecker(test);