import {BankAccount} from "./account";

export function ATM(bank_account){
    this.bank_account = bank_account;

    this.sendMoney = function (bank_account, amount){
        if (this.bank_account.withdrawMoney(amount)){
            bank_account.addMoney(amount);
            console.log("Send Money from" + this.bank_account.user.name + " to " +  bank_account.user.name + " taka " + amount + " is successful!")
        }
    }
}