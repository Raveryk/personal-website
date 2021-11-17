import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MusicProjectsComponent } from './music-projects/music-projects.component';
import { DiscographyComponent } from './discography/discography.component';
import { SoftwareComponent } from './software/software.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MusicProjectsComponent,
    DiscographyComponent,
    SoftwareComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'about-me', component: AboutMeComponent },
      { path: 'music-projects', component: MusicProjectsComponent },
      { path: 'discography', component: DiscographyComponent },
      { path: 'software', component: SoftwareComponent },
      { path: '', redirectTo: 'about-me', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
