import { Component, Input} from '@angular/core';
import { Post } from '../../models/ListaPost';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-dettaglio-post',
  templateUrl: './dettaglio-post.component.html',
  styleUrl: './dettaglio-post.component.css'
})
export class DettaglioPostComponent {
  
    @Input() 
    post!: Post;
    constructor(public postsService: PostsService) {}
  
  AggiungiPreferito(){
    this.postsService.addPreferito(this.post.title);
  }
  }

