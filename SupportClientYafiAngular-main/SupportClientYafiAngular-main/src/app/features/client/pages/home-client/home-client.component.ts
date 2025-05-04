import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarclientComponent } from '../navbarclient/navbarclient.component';
import { FooterclientComponent } from "../footerclient/footerclient.component";

@Component({
  selector: 'app-home-client',
  standalone: true,
  imports: [NavbarclientComponent, FooterclientComponent],
  templateUrl: './home-client.component.html',
  styleUrl: './home-client.component.css'
})
export class HomeClientComponent {

  constructor(private router: Router, ){}

  navigateToLogin(){
    this.router.navigate(['/auth/login'])
  }
  navigateToCahtbot(){
    this.router.navigate(['/client/chatbot'])
  }
}
