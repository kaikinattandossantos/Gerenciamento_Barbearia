import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-lista-post',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './lista-post.component.html',
})
export class ListaPostComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (posts) => this.posts = posts,
      error: (err) => console.error('Erro:', err)
    });
  }
}
