import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePlaylistComponent } from './page-playlist/page-playlist.component';
import { HomeComponent } from './home/home.component';
import { PageLoginComponent } from './page-login/page-login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pageLogin', component: PageLoginComponent },
  { path: 'pagePlaylist', component: PagePlaylistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
