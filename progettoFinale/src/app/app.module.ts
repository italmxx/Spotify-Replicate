import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { NavSuperioreComponent } from './nav-superiore/nav-superiore.component';
import { HomeComponent } from './home/home.component';
import { SongComponent } from './song/song.component';
import { PagePlaylistComponent } from './page-playlist/page-playlist.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CardComponent,
    NavbarComponent,
    NavSuperioreComponent,
    HomeComponent,
    SongComponent,
    PagePlaylistComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
