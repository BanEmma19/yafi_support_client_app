import { Routes } from '@angular/router';
import { HomeClientComponent } from './pages/home-client/home-client.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';
import { ProfilComponent } from './pages/profil/profil.component';



export const CLIENT_ROUTES: Routes = [
    {path:"home", component:HomeClientComponent},
    {path:"chatbot", component:ChatbotComponent},
    {path:"profil", component:ProfilComponent}
];
