var SandboxedModule = require("sandboxed-module");

describe('CandD() function', function () {
  it('returns the sum of 2 values as calculated in the function) ', function (done) {

    function fakeGetC () {
      var c = 9;
      // console.log('\t%_%_%_%_ \tSandboxed % \tget_c % \tfakeGetC _%_ c ===', c);
      return c;
    }

    function fakeGetD () {
      var d = 6;
      // console.log('\t%_%_%_%_ \tSandboxed % \tget_d % \tfakeGetD _%_ d ===', d);
      return d;
    }

    var localget_c = {
      get_c: fakeGetC
    };
    var localget_d = {
      get_d: fakeGetD
    };

//  var CandD = require('../../routes/add_c_and_d');
// The path in the requires object is the relative path to the sandbox require path
    var CandD = SandboxedModule.require("../../routes/add_c_and_d", {
      requires: {
        './get_c': localget_c,
        './get_d': localget_d
      }
    });

    expect(CandD.addCandD()).to.equal(15);
    done();
  });
});
