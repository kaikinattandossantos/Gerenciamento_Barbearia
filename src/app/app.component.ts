// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPostComponent } from './services/lista-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ListaPostComponent, ListaPostComponent], // Importe seu componente aqui
  template: `
    <main>
  <app-lista-post></app-lista-post>
    </main>
  `,
})
export class AppComponent {
  title = 'projetoAng';
}
