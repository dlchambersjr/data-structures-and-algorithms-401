'use strict';

const insertShiftArray = require('../array-shift');

describe('Testing insertShiftArray Results', () => {

    it('should not receive empty parameters', ()=> {
        const actual = insertShiftArray('',1);
        const expected = null;
        expect(actual).toBe(expected);
    });
    
    xit('should return a new array that has a length 1 greter than the original array',()=>{});

    xit('shouuld return the middle value of the new array as equal to the inserted number', ()=> {});

} );