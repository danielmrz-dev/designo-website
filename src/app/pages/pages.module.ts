import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { FilterViewProjectsCardsPipe } from './pipes/filter-view-projects-cards.pipe';
import { FilterProjectCardsPipe } from './pipes/filter-project-cards.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
    FilterViewProjectsCardsPipe,
    FilterProjectCardsPipe,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    ProjectsComponent,
  ]
})
export class PagesModule { }
