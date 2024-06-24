import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferitiComponent } from './Components/preferiti/preferiti.component';
import { BodyComponent } from './Components/body/body.component';
import { DettaglioPostComponent } from './Components/dettaglio-post/dettaglio-post.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    PreferitiComponent,
    BodyComponent,
    DettaglioPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
