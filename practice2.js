let passwords = ["tytT3729.", "fhD!yrjj", "ttkTuwer3", "DVYYEYY!5", "qwbfj76%", "Pl3!", "tytT3729.", "12qw", "tytT3728.", "DVYYEYY!5", "tkTuwer3!"];

var conditions = /(?=\S*\d)(?=\S*[a-z])(?=\S*[A-Z])(?=\S*[#!.$%])\S{5,}/;

let validatePasswords = passwords

.map((password, index) => {
 
    if (conditions.test(password) && passwords.indexOf(password) === index) {
      return true
    } else {
      return false
    }
 });

 console.log(validatePasswords); 

  //1. regex test
//   .map((password) => regex.test(password))

  //2. Check duplicate
  // let results = passwords
  // .map((password, index) => passwords.indexOf(password) === index)