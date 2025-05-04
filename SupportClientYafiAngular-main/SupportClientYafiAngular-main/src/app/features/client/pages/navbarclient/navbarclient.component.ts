import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarclient',
  standalone: true,
  imports: [],
  templateUrl: './navbarclient.component.html',
  styleUrl: './navbarclient.component.css'
})
export class NavbarclientComponent {

  constructor(private router:Router){}
  logout(){
    this.router.navigate(['/auth/login'])
  }
  navigateToCahtbot(){
    this.router.navigate(['/client/chatbot'])
  }
  

}
