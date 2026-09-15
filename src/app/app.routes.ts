import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Pets } from './pets/pets';
import { About } from './about/about';
import { Contact } from './contact/contact';

import { Signup } from './signup/signup';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'pets', component: Pets },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
 
  { path: 'signup', component: Signup },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];