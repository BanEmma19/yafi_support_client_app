import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passwordagent',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './passwordagent.component.html',
  styleUrl: './passwordagent.component.css'
})
export class PasswordagentComponent {

  constructor(private router:Router, private fb: FormBuilder){

    this.registerForm = this.fb.group({
       
      password: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])/)
        ]],
        confirmPassword: ['']
      }, { validators: this.passwordsMatch });

  }




// ----------------------------------------debut formulaire
registerForm: FormGroup ;
  submitted = false;
  showPassword = false;

passwordsMatch(group: FormGroup) {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;
  return password === confirm ? null : { notMatching: true };
}

get f() { return this.registerForm.controls; }

togglePassword() {
  this.showPassword = !this.showPassword;
}

onSubmit() {
  this.submitted = true;
  if (this.registerForm.invalid) return;
  console.log("Formulaire validé ✅", this.registerForm.value);
}

// ----------------------------------------fin formulaire

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
