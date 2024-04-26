document.querySelector("#firstname").addEventListener("keyup", function (e) {
  document.querySelector("#display-firstname").textContent = this.value;
});

document.querySelector("#age").onkeyup = function () {
  if (this.value >= 18) {
    const section = document.querySelector("#a-hard-truth");
    section.setAttribute("style", "visibility: visible");
  }
};

const pwd = (e) => {
  const pwd = document.querySelector("#pwd");
  const pwdConfirm = document.querySelector("#pwd-confirm");

  if (e.target.value.length < 6) {
    borderColor = "#ff0000";
  }

  e.target.setAttribute("style", `border-color: ${borderColor}`);

  if (pwd.value !== pwdConfirm.value && pwdConfirm.value != "") {
    pwdConfirm.setAttribute("style", "border-color: #ff0000");
  }
};
const checkPwd = (e) => {
  const pwd = document.querySelector("#pwd");
  const pwdConfirm = document.querySelector("#pwd-confirm");

  if (e.target.value.length < 6) {
    borderColor = "#ff0000";
  }

  e.target.setAttribute("style", `border-color: ${borderColor}`);

  if (pwd.value !== pwdConfirm.value && pwdConfirm.value != "") {
    pwdConfirm.setAttribute("style", "border-color: #ff0000");
  }
};

document.querySelector("#pwd").addEventListener("keyup", checkPwd);
document.querySelector("#pwd-confirm").addEventListener("keyup", checkPwd);

const toggleDarkmode = (e) => {
  let bgColor;
  let textColor;

  if (e.target.value == "light") {
    bgColor = "#ffffff";
    textColor = "#000000";
  } else {
    bgColor = "#000000";
    textColor = "#ffffff";
  }

  document.body.style.backgroundColor = bgColor;
  document.body.style.color = textColor;
};

document
  .querySelector("#toggle-darkmode")
  .addEventListener("change", toggleDarkmode);
