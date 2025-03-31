import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-projects-card',
  templateUrl: './view-projects-card.component.html',
  styleUrl: './view-projects-card.component.scss'
})
export class ViewProjectsCardComponent {

  @Input({ required: true }) bgImage: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) link: string = '';

}
