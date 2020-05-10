const http = new easyHTTP();

// Get Posts
const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(
  err,
  response
) {
  if (err) {
    console.log(err);
    document.body.innerHTML = '404';
  } else {
    console.log(response);
  }
});

console.log(posts);
