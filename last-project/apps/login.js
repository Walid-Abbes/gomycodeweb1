const container = document.querySelector(".container"),
  showPw = document.querySelectorAll(".showPw"),
  pwFields = document.querySelectorAll(".password"),
  signUp = document.querySelector(".signUpLink"),
  logIn = document.querySelector(".logInLink");
showPw.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    pwFields.forEach((pwField) => {
      if (pwField.type === "password") {
        pwField.type = "text";
        showPw.forEach((icon) => {
          icon.classList.replace("uil-eye-slash", "uil-eye");
        });
      } else {
        pwField.type = "password";
        showPw.forEach((icon) => {
          icon.classList.replace("uil-eye", "uil-eye-slash");
        });
      }
    });
  });
});
///////
signUp.addEventListener("click", () => {
  container.classList.add("active");
});
logIn.addEventListener("click", () => {
  container.classList.remove("active");
});
