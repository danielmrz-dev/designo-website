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
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ViewProjectsCardComponent,
    FeatureCardComponent,
    ProjectCardComponent,
    LocationCardComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDrawer,
    NgTemplateOutlet,
    RouterLink,
    MatDialogModule
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
