let loggedIn = false;

let login_btn = document.getElementById('login_btn');
let reg_btn = document.getElementById('reg_btn');

function changeLogin() {
  if (loggedIn === true) {
    loggedIn = false;
    login_btn.textContent = 'LOGIN';
    // login_btn.href = '/login';
    reg_btn.textContent = 'REGISTER';
    reg_btn.href = '/register';
  } else {
    loggedIn = true;
    login_btn.textContent = 'LOGOUT';
    // login_btn.href = '/logout';
    reg_btn.textContent = 'PROFILE';
    reg_btn.href = '/profile';
  }
}

if (loggedIn === true) {
  login_btn.textContent = 'LOGOUT';
  //  login_btn.href = '/logout';
  reg_btn.textContent = 'PROFILE';
  reg_btn.href = '/profile';
} else {
  login_btn.textContent = 'LOGIN';
  //  login_btn.href = '/login';
  reg_btn.textContent = 'REGISTER';
  reg_btn.href = '/register';
}
