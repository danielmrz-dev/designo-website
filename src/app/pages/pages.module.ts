import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProjectsComponent,
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
