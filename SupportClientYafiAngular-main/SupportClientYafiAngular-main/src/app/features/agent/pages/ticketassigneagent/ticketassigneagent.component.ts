import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticketassigneagent',
  standalone: true,
  imports: [],
  templateUrl: './ticketassigneagent.component.html',
  styleUrl: './ticketassigneagent.component.css'
})
export class TicketassigneagentComponent {

constructor(private router: Router){}

//  DEBUT   LES NAVBAR

showSidebarMobile = false;
isDesktop = window.innerWidth >= 768;

ngOnInit() {
  // Met à jour isDesktop au chargement
  window.addEventListener('resize', () => {
    this.isDesktop = window.innerWidth >= 768;
    if (this.isDesktop) {
      this.showSidebarMobile = false;
    }
  });
}

toggleSidebar() {
  this.showSidebarMobile = !this.showSidebarMobile;
}
//  FIN   LES NAVBAR

logout() {
 this.router.navigate(['/auth/login']);
  // Ajoute ici ta logique réelle
}


}
