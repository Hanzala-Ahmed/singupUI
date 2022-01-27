const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const signup = () => {
  //   console.log(fullName);
  console.log(email.value);
  console.log(phoneNumber.value);
  console.log(password.value);
  const signupData = {
    fullName: firstName.value + " " + lastName.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    password: password.value,
  };
  const user = JSON.parse(localStorage.getItem("users")) || [];
  console.log(user);
  const userIndex = user.findIndex((value, ind) => {
    return value.email === signupData.email;
  });
  if (
    firstName.value.length > 3 &&
    lastName.value.length > 3 &&
    phoneNumber.value.length === 11 && 
    email.value.length > 8
  ) {
    if (userIndex === -1) {
      user.push(signupData);
      localStorage.setItem("users", JSON.stringify(user));
      // alert("Successfully Signup");
      window.location.assign("./login.html");
    } else {
      alert("User Already Exist");
    }
  } else {
    alert("Invalid User Information Write correct information");
  }
};

const login = () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  console.log(name.value);
  console.log(email.value);
  console.log(password.value);
  const userData = JSON.parse(localStorage.getItem("users"));
  console.log(userData);
  const userCheck = userData.find((value) => {
    return (
      value.email === email.value &&
      value.password === password.value &&
      value.fullName === name.value
    );
  });

  if (userCheck) {
    localStorage.setItem("currentUser", JSON.stringify(userCheck));
    // alert("Successfully login");
    window.location.assign("./dashboard.html");
  } else {
    alert("Invalid User");
  }
};

const dashboard = () => {
  const currentUserData = JSON.parse(localStorage.getItem("currentUser"));
  console.log(currentUserData);
  var dahsFullName = document.getElementById("dahsFullName");
  var dashEmail = document.getElementById("dashEmail");
  var dashNumber = document.getElementById("dashNumber");
  var dashPassword = document.getElementById("dashPassword");
  dahsFullName.innerHTML = currentUserData.fullName;
  dashEmail.innerHTML = currentUserData.email;
  dashNumber.innerHTML = currentUserData.phoneNumber;
  dashPassword.innerHTML = currentUserData.password;
};
const logout = () => {
  localStorage.removeItem("currentUser");
  window.location.assign("./login.html");
  //   alert("Successfully User Logout");
};


const showPass = (e) => {
    e.className = "fas fa-eye-slash"
    e.setAttribute("onclick","hidePass(this)")
    // console.log(e);
    const password = document.getElementById("password")
    password.type = "text"
}

const hidePass = (e) => {
    e.className = "fas fa-eye"
    e.setAttribute("onclick","showPass(this)")
    // console.log(e);
    const password = document.getElementById("password")
    password.type = "password"
    // console.log(password);
}