import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FilterViewProjectsCardsPipe } from './pipes/filter-view-projects-cards.pipe';
import { FilterProjectCardsPipe } from './pipes/filter-project-cards.pipe';
import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    FilterViewProjectsCardsPipe,
    FilterProjectCardsPipe,
    AboutComponent,
    LocationsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
    LocationsComponent,
    ContactComponent,
  ]
})
export class PagesModule { }
