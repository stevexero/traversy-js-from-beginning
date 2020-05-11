const http = new easyHTTP();

// Get Posts
// **********************
// const posts = http.get('https://jsonplaceholder.typicode.com/posts', function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//     document.body.innerHTML = '404';
//   } else {
//     console.log(response);
//   }
// });

// console.log(posts);

// Get Single Post
// **********************
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(
//   err,
//   response
// ) {
//   if (err) {
//     console.log(err);
//     document.body.innerHTML = '404';
//   } else {
//     console.log(response);
//   }
// });

// Create Data
// **********************
const data = {
  title: 'custom post',
  body: 'yayayayayayayayayayayaya'
};

// Create Post
// **********************
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//     document.body.innerHTML = '404';
//   } else {
//     console.log(post);
//   }
// });

// Update post
// **********************
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(
//   err,
//   post
// ) {
//   if (err) {
//     console.log(err);
//     document.body.innerHTML = '404';
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
// **********************
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(
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
