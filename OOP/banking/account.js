import {User} from "./user";

export function BankAccount(user, balance){
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