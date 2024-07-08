import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = 'Nehir';
  items = [
    { description: 'Kahvaltı', action: 'No'},
    { description: 'Sinema', action: 'No'},
    { description: 'Spor', action: 'No'},
    { description: 'Ders Çalış', action: 'No'}
  ];
}
