import { Component, Input } from '@angular/core';
import { IProjectCard } from '../../interfaces/project-card.interface';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {

  @Input({ required: true }) cardInfo!: IProjectCard;
}
