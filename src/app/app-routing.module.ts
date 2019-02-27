import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/create/create.component';
import { MessagesComponent } from './components/messages/messages.component';
import { StartupsComponent } from './components/startups/startups.component';
import { MyTeamComponent } from './components/my-team/my-team.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StartupViewComponent } from './components/startup-view/startup-view.component';


const routes: Routes = [
  { path: '',  component: LandingPageComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'create',  component: CreateComponent },
  { path: 'messages',  component: MessagesComponent },
  { path: 'startups',  component: StartupsComponent },
  { path: 'myteam',  component: MyTeamComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'startups/:id', component: StartupViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
