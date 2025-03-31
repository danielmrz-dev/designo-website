import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full' },
  { 
    path: "home",
    component: HomeComponent,
    title: "Designo - Home"
  },
  { 
    path: ":category",
    component: ProjectsComponent,
    data: {
      titlePrefix: 'Designo - '
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
