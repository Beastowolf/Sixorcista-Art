import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Login', url: '/login', icon: 'people-circle' },
    { title: 'Habitaciones', url: '/folder/Inbox', icon: 'bed' },
    { title: 'Menu', url: '/folder/Outbox', icon: 'newspaper' },
    { title: 'Parkeo', url: '/folder/Archived', icon: 'car' },
    
  ];
  public labels = ['sexo', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
