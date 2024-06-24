import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrl: './preferiti.component.css'
})
export class PreferitiComponent implements OnInit {
  preferiti: string[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.preferiti = this.postsService.getPreferiti();
  }
  rimuoviPreferito(title: string): void {
    this.postsService.rimuoviPreferito(title);
    this.preferiti = this.postsService.getPreferiti(); 
  }
}