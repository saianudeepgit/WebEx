// //Rules button
// function Show(id)
// {
//   if (document.getElementById(id).style.display == 'none') {
//        document.getElementById(id).style.display = 'block';
//   }
//   else {
//        document.getElementById(id).style.display = 'none';
//   }
// };

//Submit Button
function Verify() {
  var userRef = "anudeep";
  var passRef = "sai123";
  
  var user =  document.getElementById("username-field").value;
  var pass = document.getElementById("password-field").value;
  if (user == userRef && pass == passRef) {
    alert("Successfully LoggedIn")
    window.location.href = "";

  } else {
  alert("It's seem you make a mistake...")
  }
};