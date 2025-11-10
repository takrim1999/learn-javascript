// Abstraction
function TChatAccount(username,password){
    this.username = username;
    // this.password = password; // Accessible from outside of object!
    let pass = password

    // encapsulation
    this.getPass = function (){
        return pass;
    }

    this.login = function (username, password){
        if (this.username === username){
            if(pass === password){
                console.log(this.username + " Logged In Successfully!");
            }
            else {
                console.log("Wrong Password! Try again!");
            }
        }
        else{
            console.log("User not found!");
        }
    }
}

takrim_account = new TChatAccount("takrim1999","MyNicePassWord!");
// console.log(takrim_account.password) // Bad Practice!
console.log(takrim_account.getPass())
takrim_account.login("takrim1999","MyNicePassWord!")