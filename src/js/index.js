const togglePassBtn = document.querySelector(".toggle-pass");
const eyeImg = document.querySelector(".eye");
const passwordInput = document.querySelector("#passwordInput");

const togglePassVisibility = () => {
  const currentEye = eyeImg.getAttribute("src");

  switch (currentEye) {
    case "./src/img/eye-off.png":
      eyeImg.setAttribute("src", "./src/img/eye-on.png");
      passwordInput.setAttribute("type", "text");
      break;
    case "./src/img/eye-on.png":
      eyeImg.setAttribute("src", "./src/img/eye-off.png");
      passwordInput.setAttribute("type", "password");
      break;
  }
};

togglePassBtn.addEventListener("click", togglePassVisibility);
