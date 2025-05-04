import { Component } from '@angular/core';
import { NavbarclientComponent } from '../navbarclient/navbarclient.component';
import { FooterclientComponent } from '../footerclient/footerclient.component';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [NavbarclientComponent, FooterclientComponent],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

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
