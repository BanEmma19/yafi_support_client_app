import { Component } from '@angular/core';
import { NavbarclientComponent } from '../navbarclient/navbarclient.component';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [NavbarclientComponent],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

}
