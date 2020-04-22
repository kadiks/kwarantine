const { expect } = require('chai');
const fn = require('../../src/utils/random');

describe('utils', () => {
  describe('random', () => {
    describe('#validateWord', () => {
      it('should validate existing word', () => {
        expect(fn.validateWord('le')).to.eql(true);
      });
      it('should validate uppercase word', () => {
        expect(fn.validateWord('LE')).to.eql(true);
      });
      it('should validate conjugated word', () => {
        expect(fn.validateWord('accroissions')).to.eql(true);
      });
    });
  });
});
