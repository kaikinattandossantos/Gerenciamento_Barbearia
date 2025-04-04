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

  // Adiciona ou atualiza um post
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

  // Preenche o formulário para edição
  editarPost(post: Post) {
    this.postAtual = { ...post };
    this.editando = true;
  }

  // Remove um post
  removerPost(post: Post) {
    this.posts = this.posts.filter(p => p.id !== post.id);
  }

  // Cancela a edição
  cancelarEdicao() {
    this.limparFormulario();
  }

  // Limpa o formulário
  private limparFormulario() {
    this.postAtual = { titulo: '', conteudo: '' };
    this.editando = false;
  }
}
