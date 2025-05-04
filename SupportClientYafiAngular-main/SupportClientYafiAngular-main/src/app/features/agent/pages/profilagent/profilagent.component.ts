import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profilagent',
  standalone: true,
  imports: [],
  templateUrl: './profilagent.component.html',
  styleUrl: './profilagent.component.css'
})
export class ProfilagentComponent {

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


// DEBUT PHOTO DE PROFIL
imagePreview: string | ArrayBuffer | null = null;

onFileSelected(event: Event): void {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = e => {
      this.imagePreview = reader.result;
    };

    reader.readAsDataURL(file);
  }
}

// FIN PHOTO DE PROFIL


}
