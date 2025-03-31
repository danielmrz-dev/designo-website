import { Component } from '@angular/core';
import { IViewProjectCard } from '../../interfaces/view-project-card.interface';
import { featureCardsContent, viewProjectCardsContent } from '../../../data/cards-data';
import { IFeatureCard } from '../../interfaces/feature-card.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  cardsContent: IViewProjectCard[] = viewProjectCardsContent;
  featureCardContent: IFeatureCard[] = featureCardsContent;
}
