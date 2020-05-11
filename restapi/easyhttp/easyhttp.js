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

easyHTTP.prototype.post = function(url, data, cb) {
  this.http.open('POST', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    cb(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// make HTTP PUT Request

easyHTTP.prototype.put = function(url, data, cb) {
  this.http.open('PUT', url, true);

  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function() {
    cb(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// make HTTP DELETE Request
easyHTTP.prototype.delete = function(url, cb) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      cb(null, 'Post Deleted');
    } else {
      cb('Error: ' + self.http.status);
    }
  };

  this.http.send();
};
