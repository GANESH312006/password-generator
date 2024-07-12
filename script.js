'use strict';

const passwordLengthInput = document.querySelector('.pwd-length');
const generatedPwd = document.querySelector('.generated-password');
const generateBtn = document.querySelector('.generate-pwd-btn');
const lengthLabel = document.querySelector('.length-label');
const copyBtn = document.querySelector('.copy-pwd-btn');

const uCaseAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lCaseAlphabets = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '012345689';
const specialChar = "!@#$%^&*()-_=+/\\'/?><:;{}[]";

const characters = uCaseAlphabets + lCaseAlphabets + numbers + specialChar;
const charLength = characters.length; // 88

passwordLengthInput.addEventListener('keyup', function () {
  if (passwordLengthInput.value.length !== 0) {
    if (Number.parseInt(this.value) < 5 && Number.parseInt(this.value) > 0) {
      lengthLabel.textContent = 'Weak password!';
    } else if (
      Number.parseInt(this.value) >= 5 &&
      Number.parseInt(this.value) <= 10
    ) {
      lengthLabel.textContent = 'Medium Password!';
    } else {
      lengthLabel.textContent = 'Strong Password!';
    }
  } else {
    lengthLabel.textContent = 'Password Length (1 - 12)';
  }
});

generateBtn.addEventListener('click', () => {
  let count = 0;
  let pwd = '';
  const pwdLength = Number.parseInt(passwordLengthInput.value);

  while (count < pwdLength) {
    const randomIndex = Math.trunc(Math.random() * charLength);
    pwd += characters.charAt(randomIndex);
    count++;
  }

  generatedPwd.value = pwd;
});

copyBtn.addEventListener('click', () => {
  generatedPwd.select();
  generatedPwd.setSelectionRange(0, 99099); // For mobile device

  // Copy the text to the clipboard
  navigator.clipboard.writeText(generatedPwd.value);

  alert(`The text '${generatedPwd.value}' has been copied`);
});
