import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardadmin',
  standalone: true,
  imports: [],
  templateUrl: './dashboardadmin.component.html',
  styleUrl: './dashboardadmin.component.css'
})
export class DashboardadminComponent {
constructor(private router:Router){}

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
