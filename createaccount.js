createAcc()
{const form = document.signup.html('create a new account');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.signup.html('username').value.trim();
  const email = document.signup.html('email').value.trim();
  const password = document.signup.html('password').value;

  if (username === '' || email === '' || password === '') {
    alert('Please fill in all fields.');
    return;
  }

  console.log('Sign-up successful!');
  console.log('Username:', username);
  console.log('Email:', email);
  console.log('Password:', password);

  form.reset();
});


}