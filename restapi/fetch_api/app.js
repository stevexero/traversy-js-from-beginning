document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get Local Text File Data
// function getText() {
//   fetch('test.txt')
//     .then(function(res) {
//       return res.text();
//     })
//     .then(function(data) {
//       console.log(data);
//       document.getElementById('output').innerHTML = data;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Get Local Text File Data with arrow function
function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

// // Get Local JSON Data
// function getJson() {
//   fetch('posts.json')
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(post) {
//         output += `<li>${post.title}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Get Local JSON Data with arrow function
function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(function(data) {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// // Get from external API
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(data) {
//       console.log(data);
//       let output = '';
//       data.forEach(function(user) {
//         output += `<li>${user.repos_url}</li>`;
//       });
//       document.getElementById('output').innerHTML = output;
//     })
//     .catch(function(err) {
//       console.log(err);
//     });
// }

// Get from external API with arrow functions
function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => (output += `<li>${user.repos_url}</li>`));
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

// Get from external API with error handling
// function getExternal() {
//   fetch('https://api.github.com/users')
//     .then(res => res.json())
//     .then(res => {
//       if (!res.ok) {
//         throw new Error(res.error);
//       }
//       return res;
//     })
//     .catch(err => console.log(err));
// }

// // separate function for error handling
// function handleErrors(res) {
//   if (!res.ok) throw new Error(res.error);
//   return res;
// }

// fetch('https://api.github.com/users')
//   .then(res => res.json())
//   .then(handleErrors)
//   .then(res => console.log(res.data))
//   .catch(err => console.log(err));
