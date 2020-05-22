// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var myMiniscule = 'abcdefghijklmnopqrstuvwxyz'
  var myMajsucule = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var myNumerals = '0123456789'
  var mySpecial = '\`\'!@#$%^&*()_-+={}[]|;:",./<>?~'
  var charPool = ''
  var finalPass = ""


  var passLength = prompt('How many characters do you want? Between 8 and 128')
  if (!/^\d+$/.test(passLength)) return 'Must input positive integer'
  passLength = Number(passLength)
  if (passLength < 8 || passLength > 128){
    return 'Invalid password length.'
  }
  var askMiniscule = confirm('Do you want lowercase characters?')
  if (askMiniscule) charPool += myMiniscule
  var askMajuscule = confirm('Do you want uppercase characters?')
  if (askMajuscule) charPool += myMajsucule
  var askNumerals = confirm('Do you want numbers?')
  if (askNumerals) charPool += myNumerals
  var askSpecial = confirm('Do you want special characters?')
  if (askSpecial) charPool += mySpecial
  
  if (charPool.length == 0) return 'Must select at least one character category.'
  
  for (i = 0; i < passLength; i ++){
    var myChar = charPool[Math.floor(Math.random()*charPool.length)]
    finalPass += myChar
  }

  return finalPass
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
