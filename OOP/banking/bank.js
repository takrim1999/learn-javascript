import {ATM} from "./atm";
import {User} from "./user";
import {BankAccount} from "./account";

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
