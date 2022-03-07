import Haiku  from '../src/js/haiku.js';

describe('Haiku', () => {

  test('should create a haiku object with 3 lines', () => {
    const haiku = new Haiku("this", "is", "a test");
    expect(haiku.line1).toEqual("this");
    expect(haiku.line2).toEqual("is");
    expect(haiku.line3).toEqual("a test");
  });
  test('should split the words of a string into an array', () =>{
    const haiku1 = new Haiku("this is a test", "test oh yeah", "test uh oh");
    expect(haiku1.splitString(haiku1.line1)).toEqual(["this", "is", "a", "test"]);
    expect(haiku1.splitString(haiku1.line2)).toEqual(["test", "oh", "yeah"]);
    expect(haiku1.splitString(haiku1.line3)).toEqual(["test", "uh", "oh"]);
  });
});




//TESTS??
//1. It should test how many syllables are in one word.
//2. It should test how many syllables are in multiple words.
//3. It should return true if the first line has 5 syllables.
//4. It should return true if the second line has 7 syllables.
//5. It should return true if the third line has 5 syllables.