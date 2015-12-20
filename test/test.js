var assert = require('assert');

describe('Test', function() {
  it('should pass', function() {
    assert.equal(1, 1);
  });

  it('should fail', function() {
    assert.equal(1, 2);
  });
});
