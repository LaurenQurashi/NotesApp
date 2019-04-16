
var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error ("Failure: " + assertionToCheck + " Is a mess");
    } else {
      console.log("Test passed! ");
    }
  }
};
//  this is our testing documents kinda. Like jasmine?
