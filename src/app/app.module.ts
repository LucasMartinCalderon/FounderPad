import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { StartupsComponent } from './components/startups/startups.component';
import { MessagesComponent } from './components/messages/messages.component';
import { CreateComponent } from './components/create/create.component';
import { MyTeamComponent } from './components/my-team/my-team.component';

import { MaterialModule } from './material.module';
import { ProfileComponent } from './components/profile/profile.component';
import { StartupViewComponent } from './components/startup-view/startup-view.component';

import { StartupService } from './services/startup.service';
import { NavigationService } from './services/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavigationComponent,
    HomeComponent,
    StartupsComponent,
    MessagesComponent,
    CreateComponent,
    MyTeamComponent,
    ProfileComponent,
    StartupViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    NavigationService,
    StartupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
