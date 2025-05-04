import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterclientComponent } from "../../../client/pages/footerclient/footerclient.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterclientComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  constructor(private router:Router){}
  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
  navigateToRegister(){
    this.router.navigate(['/auth/register'])
  }
}
