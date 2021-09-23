// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var number = ["0123456789"];
var specialChar = [".!?@#$%^&*()"];

function generatePassword() {
  var passwordLength = prompt("How long will your password be? (8-128)");

  if (!passwordLength) {
    return;
  }
  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter number between 8-128");
    return generatePassword();
  }
  else {
    var confirmLow = confirm("Would you like to add lowercase letters to your password?");
    var confirmUp = confirm("Would you like to add uppercase letters to your password?");
    var confirmNum = confirm("Would you like to add numbers to your password? ");
    var confirmSpec = confirm("Would you like to add special characters to your password?");    
  }

  if (!confirmLow && !confirmUp && !confirmNum && !confirmSpec) {
    alert("Please select at least one of the specified criteria.");
    return generatePassword();
  }

  var randomStr = ""

  if (confirmLow) {
    randomStr += lowerCase; 
  }

  if (confirmUp) {
    randomStr += upperCase;
  }

  if (confirmNum) {
    randomStr += number;
  }

  if (confirmSpec) {
    randomStr += specialChar;
  }
  
  console.log(randomStr);

  var password = "";

  for (var index=0; index < passwordLength; index++) {
    var pass = randomStr[Math.floor(Math.random() * randomStr.length)];
    password += pass;
  }
  
  console.log(password);

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  return;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


