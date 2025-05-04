import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardagent',
  standalone: true,
  imports: [],
  templateUrl: './dashboardagent.component.html',
  styleUrl: './dashboardagent.component.css'
})
export class DashboardagentComponent {
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

// FIN DES DEUX NAVBAR

logout() {
  this.router.navigate(['/auth/login'])
  // Ajoute ici ta logique réelle
}


}
