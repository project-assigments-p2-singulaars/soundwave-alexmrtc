import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DiscoverComponent } from './discover/discover.component';
import { JoinComponent } from './join/join.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'discover-page', component: DiscoverComponent },
  { path: 'join-page', component: JoinComponent },
];
