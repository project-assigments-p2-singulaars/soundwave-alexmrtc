import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landing', redirectTo: "" },
  { path: 'discover-page', component: DiscoverComponent },
  { path: 'join-page', component: JoinComponent },
  { path: '**', component: NotFoundComponent },
];
