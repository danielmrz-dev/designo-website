import { NgModule } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { FooterComponent } from './footer/footer.component';
import { ViewProjectsCardComponent } from './view-projects-card/view-projects-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ViewProjectsCardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatDrawer,
    NgTemplateOutlet
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ViewProjectsCardComponent
  ]
})
export class ComponentsModule { }
