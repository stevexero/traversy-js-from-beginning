// Init Github
const github = new GitHub();

// Search Input
const searchUser = document.getElementById('searchUser');

// Search Input event listener
searchUser.addEventListener('keyup', e => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP Call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show Alert * through ui class (ui.js)
        //
      } else {
        // Show Profile *through ui class (ui.js)
        //
      }
    });
  } else {
    //   CLear Profile
    //
  }
});
