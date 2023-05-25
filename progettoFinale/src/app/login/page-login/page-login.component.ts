import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})

export class PageLoginComponent {

  email: string| undefined;
  password: string| undefined;
  flag: boolean| undefined;

  login (email: string, password: string) {
    if (email === "123@gmail.com" && password === "123"){
      console.log("Login riuscito");
      this.flag = true;
    }else{
      console.log("Login fallito");
    }
  }
}

