import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="padding: 20px; font-family: sans-serif; text-align: center;">
      <h1>Villa Retiro Map</h1>
      <p>PWA de geolocalización y navegación para Villa Retiro II Anexo.</p>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'villa-retiro-map';
}
