
document.getElementById('form').addEventListener('click', function (event) {
  event.preventDefault();
  const email = document.getElementById('useremail').value;
  const password = document.getElementById('userPw').value;
  console.log(email);
  console.log(password);
  const storedUserData = JSON.parse(localStorage.getItem(email));
  console.log(storedUserData.fname);
  if (storedUserData.password === password) {
    alert("welcome");
    window.location.href = './index3.html';
  } else {
    alert('Invalid login credentials');
  }
})


