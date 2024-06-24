import { Injectable } from '@angular/core';
import {  POSTS } from '../data/Posts';
import { Post } from '../models/ListaPost';



@Injectable({
  providedIn: 'root'
})
export class PostsService {
  preferiti: string[] = [];

  getPosts() {
    return POSTS as Post[];
  }
  getPreferiti() {
    return this.preferiti as string[];
  }
  
  addPreferito(title: string){
    if (this.preferiti.indexOf(title) == -1) {
      this.preferiti.push(title);
    }
  }

  rimuoviPreferito(title: string){
    const i = this.preferiti.indexOf(title);
    if (i> -1) {
      this.preferiti.splice(i, 1);
    }
  }
}
