import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FilterViewProjectsCardsPipe } from './pipes/filter-view-projects-cards.pipe';
import { FilterProjectCardsPipe } from './pipes/filter-project-cards.pipe';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    FilterViewProjectsCardsPipe,
    FilterProjectCardsPipe,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
    AboutComponent,
  ]
})
export class PagesModule { }
