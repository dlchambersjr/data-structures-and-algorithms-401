'use strict';

const repeatedWord = require('../new-challenges/repeatedWord/repeated-word.js');

const noDupes = 'There are no duplicate wwords in this sentence.';

const stringOfWords = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';

const mixedCase = 'The rain in Spain falls mainly on the plains.';

describe('Check for the first duplicate word', () => {

  it('should return an error message if a string is not passed', () => {

    const actual = repeatedWord();
    const expected = 'Not a string';

    expect(actual).toBe(expected);


  });

  it('should return the first duplicated word in a long string', () => {

    const actual = repeatedWord(stringOfWords);
    const expected = 'it';

    expect(actual).toBe(expected);

  });

  it('should return the first duplicated word in a mixed case string', () => {

    const actual = repeatedWord(mixedCase);
    const expected = 'the';

    expect(actual).toBe(expected);

  });

  it('should return no duplicate words if the the string has no duplicates', () => {
    const actual = repeatedWord(noDupes);
    const expected = 'No duplicate words';

    expect(actual).toBe(expected);
  });

});

