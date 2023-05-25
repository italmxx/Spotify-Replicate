import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})

export class PageLoginComponent {
  mostraDivSecondo = false;

  toggleDiv() {
    this.mostraDivSecondo = !this.mostraDivSecondo;
  }
}
