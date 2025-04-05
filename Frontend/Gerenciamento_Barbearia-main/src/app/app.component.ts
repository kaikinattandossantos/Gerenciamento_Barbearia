// src/app/app.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';

interface Post {
  id?: number;
  titulo: string;
  conteudo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [JsonPipe, CommonModule, FormsModule]
})
export class AppComponent {
  posts: Post[] = [
    { id: 1, titulo: 'Primeiro Post', conteudo: 'Conteúdo do primeiro post...' },
    { id: 2, titulo: 'Segundo Post', conteudo: 'Conteúdo do segundo post...' }
  ];

  postAtual: Post = { titulo: '', conteudo: '' };
  editando = false;

  salvarPost() {
    if (this.editando) {
      const index = this.posts.findIndex(p => p.id === this.postAtual.id);
      this.posts[index] = { ...this.postAtual };
    } else {
      const novoId = Math.max(...this.posts.map(p => p.id || 0)) + 1;
      this.posts.push({ ...this.postAtual, id: novoId });
    }
    this.limparFormulario();
  }

  editarPost(post: Post) {
    this.postAtual = { ...post };
    this.editando = true;
  }

  removerPost(post: Post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
  }

  cancelarEdicao() {
    this.limparFormulario();
  }

  private limparFormulario() {
    this.postAtual = { titulo: '', conteudo: '' };
    this.editando = false;
  }
}
