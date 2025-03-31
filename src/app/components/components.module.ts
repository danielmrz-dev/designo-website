import { NgModule } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { ViewProjectsCardComponent } from './view-projects-card/view-projects-card.component';
import { FeatureCardComponent } from './feature-card/feature-card.component';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from './project-card/project-card.component';
import { LocationCardComponent } from './location-card/location-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ViewProjectsCardComponent,
    FeatureCardComponent,
    ProjectCardComponent,
    LocationCardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDrawer,
    NgTemplateOutlet,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ViewProjectsCardComponent,
    FeatureCardComponent,
    ProjectCardComponent,
    LocationCardComponent
  ]
})
export class ComponentsModule { }
