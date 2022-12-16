let count = 0;
let course = ""
function shreyas() {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var regx = /^[6-9]\d{9}$/;
  let fname = document.getElementById("firstname");
  let mname = document.getElementById("middlename");
  let lname = document.getElementById("lastname");
  let gender = document.getElementById("gender1");
  let ferror = document.getElementById("ferror");
  let merror = document.getElementById("merror");
  let lerror = document.getElementById("lerror");
  let gerror1 = document.getElementById("gerror");
  let mail = document.getElementById("email");
  let no = document.getElementById("number");
  if (!fname.value) {
    ferror.innerHTML = "Please Fill the firstname";
    ferror.style.color = "red";
    return false;
  } else {
    ferror.innerHTML = "";
  }
  if (!lname.value) {
    lerror.innerHTML = "Please Fill the lastname";
    lerror.style.color = "red";
    return false;
  } else {
    lerror.innerHTML = "";
  }
  if (
    !gender.checked &&
    !document.getElementById("gender2").checked &&
    !document.getElementById("gender3").checked
  ) {
    gerror1.innerHTML = "Please select a gender";
    gerror1.style.color = "red";
    return false;
  } else {
    gerror1.innerHTML = "";
  }
  if (!no.value || !regx.test(no.value)) {
    document.getElementById("number1").innerHTML =
      "Please Enter a valid phone Number";
    document.getElementById("number1").style.color = "red";
    return false;
  } else {
    document.getElementById("number1").innerHTML = "";
  }
  if (!validRegex.test(mail.value)) {
    document.getElementById("emailid").innerHTML = "Please enter a valid email";
    document.getElementById("emailid").style.color = "red";
    return false;
  } else {
    document.getElementById("emailid").innerHTML = "";
  }

  if (!document.getElementById("pass").value) {
    document.getElementById("password").innerHTML = "Please enter a password";
    document.getElementById("password").style.color = "red";
    return false;
  } else {
    document.getElementById("password").innerHTML = "";
  }

  if (
    document.getElementById("pass").value !=
    document.getElementById("repass").value
  ) {
    document.getElementById("incorrect").innerHTML = "Incorrect Password";
    document.getElementById("incorrect").style.color = "red";
    return false;
  } else {
    document.getElementById("incorrect").innerHTML = "";
  }
  let a = document.getElementById("users");
  count++;
  a.innerHTML = "The number of users registered are " + count;
}

function add_in_list()
{
    var x = document.getElementById("mySelect");
    var option = document.createElement("option");
    alert(course)
    option.text = course;
    x.add(option);
}
function addnew()
{
  var z = document.getElementById("newc").value;
  course = z;
  alert(z)
  add_in_list(course);
}

function getdata(event)
{
    event.preventDefault();
    let data = document.getElementById("help");
    
    data.innerHTML = "The number of registered users are " + count;
}