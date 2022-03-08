//Business Logic
// export default function FUNCTION NAME()

export default class Haiku {
  constructor(line1, line2, line3, vowels) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.vowels = 0;
  }

  vowelChecker(line) {
    const array = line.split('');
    let vowelCount = 0;
    array.forEach(function(word) {
      if (word.includes("a") || word.includes("e") || word.includes("i") || word.includes("o") || word.includes("u")) {
        vowelCount++; 
      }
    })
    return vowelCount;
  }
}



  // splitString(line) {
  //   const array = line.split(' ');
  //   return array;
  // }

  // vowelChecker(array) {
  //   // let vowels = 0;
  //   for(let i = 0; i <= array.length; i++) {
  //     if (array.includes("hat")) {
  //       this.vowels += 1;
  //     }
  //     console.log("i = " + i);
  //     console.log(array[i]);
  //   }
  //   console.log("vowels = " + this.vowels);
  //   console.log(array);
  // }


// splitString() {
//   const arrays = new Map([
//     [1, this.line1.split(' ')],
//     [2, this.line2.split(' ')],
//     [3, this.line3.split(' ')]
//   ])
//   return arrays
// }



//   splitString(line) {
//   const array = line.split(' ');
//   let vowelChecker = 0
//   array.forEach(function(word){
//     if (word.includes("a" || "e" || "i" || "o" || "u")){
//       vowelChecker++;
//     }
//     console.log(vowelChecker);
//   })
// return array;
// }

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