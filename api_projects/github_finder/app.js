// Init Github
const github = new Github();
// Init UI
const ui = new UI();

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
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        // Show Profile *through ui class (ui.js)
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    //   CLear Profile
    ui.clearProfile();
  }
});
