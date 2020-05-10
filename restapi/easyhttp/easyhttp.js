// es5 object oriented library, using prototypes instead of classes

// gonna remake later using fetch api instead of ajax xhr and use classes

// prototypes actually run under the es6 classes

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// prototype methods...
//

// make HTTP GET Request
easyHTTP.prototype.get = function(url, cb) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      cb(null, self.http.responseText);
    } else {
      cb('Error: ' + self.http.status);
    }
  };

  this.http.send();
};

// make HTTP POST Request

// make HTTP PUT Request

// make HTTP DELETE Request
