const user = { email: 'jdoe@gmail.com' };

try {
  // Produce a ReferenceError
  //   muFunction();
  // Produce a type error
  //   null.muFunction();
  // Produce SuntaxError
  //   console.log(eval('Hello World'));
  // Produc URIError
  //   decodeURIComponent('%');

  //   Produce my own errors
  if (!user.name) {
    // throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.name);
  console.log(error instanceof ReferenceError);
  console.log(error instanceof TypeError);
  console.log(`${error.name} No its null`);
  console.log(`User Error: ${error.message}`);
} finally {
  console.log('Finally runs reguardless of result....');
}

// Can continue the program though error
console.log('Program continues');
