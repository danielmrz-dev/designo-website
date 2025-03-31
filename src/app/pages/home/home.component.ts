import { Component } from '@angular/core';
import { IProjectCard } from '../../interfaces/project-card.interface';
import { featureCardsContent, projectCardsContent } from '../../../data/project-cards';
import { IFeatureCard } from '../../interfaces/feature-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardsContent: IProjectCard[] = projectCardsContent;
  featureCardContent: IFeatureCard[] = featureCardsContent;
}
