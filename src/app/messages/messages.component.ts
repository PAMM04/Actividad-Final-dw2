import { Component } from '@angular/core';
import { MessageService } from '../message.service'; // Importa el servicio MessageService desde su archivo correspondiente

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {

  constructor(public messageService: MessageService) {} // Inyecta el servicio MessageService en el constructor y lo hace público

}
