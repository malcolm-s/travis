var assert = require('assert');

describe('Test', function() {
  it('should pass', function() {
    assert.equal(1, 1);
  });

  it('should pass now', function() {
    assert.equal(2, 2);
  });

  it('should handle promises', function() {
    return new Promise(function(resolve, reject) {
      setTimeout(resolve, 500);
    });
  });

  it('should take a short time', function(done) {
    setTimeout(done, 500);
  });

  it('should take a long time', function(done) {
    setTimeout(done, 1500);
  });

  if (true) {    
    for (var i = 0; i < 1000; i++) {
      it(`should generate a test at index ${i}`, function() {
      });
    }
  }
});
