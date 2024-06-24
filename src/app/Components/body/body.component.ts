import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/ListaPost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
 
    posts: Post[] = [];
    selectedCategory: string = 'All';
    PostsFiltrati: Post[] = [];
  
    constructor(public postsService: PostsService) { }
  
    ngOnInit(): void {
      this.posts = this.postsService.getPosts();
      this.PostsFiltrati = this.posts; 
    }

    SelezioneCategoria(category: string){
      this.selectedCategory = category;
      this.filterPosts();
    }
  
    filterPosts() {
      if (this.selectedCategory == 'All') {
        this.PostsFiltrati = this.posts;
      } else {
        this.PostsFiltrati = this.posts.filter(post => post.category == this.selectedCategory);
      }
    }
  }

