function User(name, age, profession){
    this.name = name;
    this.age = age;
    this.profession = profession;

    this.introduce = function (){
        return "Hello there! My name is " + this.name + "\nand I am a " + this.profession + " of " + this.age + " years old.";
    };
}

function BankAccount(user, balance){
    this.user = user;
    this.balance = balance;

    this.details = function (){
        return this.user.name + " got " + this.balance + " taka";
    }

    this.addMoney = function (amount){
        this.balance += amount;
    }

    this.withdrawMoney = function (amount){
        if (this.balance > amount){
            this.balance -= amount;
            return true;
        }
        else return false;
    }
}

function ATM(bank_account){
    this.bank_account = bank_account;

    this.sendMoney = function (bank_account, amount){
        if (this.bank_account.withdrawMoney(amount)){
            bank_account.addMoney(amount);
            console.log("Send Money from" + this.bank_account.user.name + " to " +  bank_account.user.name + " taka " + amount + " is successful!")
        }
    }
}


takrim = new User("Md. Takrim Ul Alam", 26,"Unemployed");
console.log(takrim.introduce());
takrim_bank_account = new BankAccount(takrim,5000);
console.log(takrim_bank_account.details());
takrim_bank_account.addMoney(500);
takrim_bank_account.withdrawMoney(1000);
console.log(takrim_bank_account.details());
partho = new User("Partho Kumar Rajvor", 26, "Student");
partho_bank_account = new BankAccount(partho,5000);
takrim_session = new ATM(takrim_bank_account);
console.log(takrim_bank_account.details());
console.log(partho_bank_account.details());
takrim_session.sendMoney(partho_bank_account,500);
console.log(takrim_bank_account.details());
console.log(partho_bank_account.details());
