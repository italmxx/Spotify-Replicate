import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';
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
  constructor(private titleService: Title) { }
ngOnInit() {
  this.titleService.setTitle('Accedi - Spotify');
}
}
