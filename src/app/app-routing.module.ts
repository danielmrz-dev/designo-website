import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { LocationsComponent } from './pages/locations/locations.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { 
    path: "home",
    component: HomeComponent,
    title: "Designo - Home"
  },
  { 
    path: "projects/:category",
    component: ProjectsComponent,
    data: {
      titlePrefix: 'Designo - '
    }
  },
  { 
    path: "about",
    component: AboutComponent,
    title: 'Designo - About Us'
  },
  { 
    path: "locations",
    component: LocationsComponent,
    title: 'Designo - Locations'
  },
  { 
    path: "contact",
    component: ContactComponent,
    title: 'Designo - Contact'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, 
      { scrollPositionRestoration: 'top' }
    ),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
