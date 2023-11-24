document.querySelector(".registerbtn").addEventListener("click", function(event) {
  event.preventDefault();
  validateForm();
});

function validateForm(e) {   
  let username = document.getElementById("userName").value;
  let email = document.getElementById("useremail").value;
  let password = document.getElementById("userpw").value;
  let confirmPassword = document.getElementById("userpw").value;

  if (username === "") {
      document.querySelector('#error1').innerHTML= "Please enter a username.";
      return; 
  } else {
      document.querySelector('#error1').innerHTML = " ";
  }
    if (email == "") {
      document.querySelector('#error2').innerHTML= "Please enter  email.";
      return; 
  } else {
      document.querySelector('#error2').innerHTML= " ";
  }

    if (password == "" || password.length < 8) {
      document.querySelector('#error3').innerHTML= "Please enter  vaild password.";
      return; 
  } else {
      document.querySelector('#error3').innerHTML= " ";
  }

  
  if (password !== confirmPassword) {
      document.querySelector('#error4').innerHTML= "password can't match.";
      return; 
  } else {
      document.querySelector('#error4').innerHTML= " ";
  }
  const userData = {
    username: username,
    email: email,
    password: password
  };

  localStorage.setItem(userData.email, JSON.stringify(userData));
  alert('Registration successful!');
}
const storedUserData = JSON.parse(localStorage.getItem('userData'));
if (storedUserData) {
  alert(`Welcome back, ${storedUserData.username}!`);
} else {
  alert('No user data found in local storage.');
}
