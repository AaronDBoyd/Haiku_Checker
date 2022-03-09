import Haiku  from '../src/js/haiku.js';

describe('Haiku', () => {

  test('should create a haiku object with 3 lines', () => {
    const haiku = new Haiku("this", "is", "a test");
    expect(haiku.line1).toEqual("this");
    expect(haiku.line2).toEqual("is");
    expect(haiku.line3).toEqual("a test");
  });
  
  describe('Haiku#vowelChecker()', () => {

    test('should count the number of vowels in a specific line of the object', () =>{
      const haiku1 = new Haiku("this is a test", "test oh yeah", "test uh oh");
      expect(haiku1.vowelChecker(haiku1.line1)).toEqual(4);
      expect(haiku1.vowelChecker(haiku1.line2)).toEqual(4);
      expect(haiku1.vowelChecker(haiku1.line3)).toEqual(3);
    })
  });
  
  describe('Haiku#haikuChecker()', () => {

    test('should return "true" if inputted lines follow 5-7-5 structure', () =>{
      const haikuTest = new Haiku("aaaaa", "eeeeeee", "iiiii");
      const haikuTest2 = new Haiku('lskjdeew', 'fheusjf', 'etwrudb');
      expect(haikuTest.haikuChecker()).toEqual(true);
      expect(haikuTest2.haikuChecker()).toEqual(false);
    })
  });  
});




//TESTS??
//1. It should test how many syllables are in one word.
//2. It should test how many syllables are in multiple words.
//3. It should return true if the first line has 5 syllables.
//4. It should return true if the second line has 7 syllables.
//5. It should return true if the third line has 5 syllables.